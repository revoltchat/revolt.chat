import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import axios from 'axios';
import shortid from 'shortid';
import { ulid } from 'ulid';

import databaseMiddleware from '../../components/middleware/database';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const handler = nc<NextApiRequest, NextApiResponse>();
handler.use(databaseMiddleware);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.body.email === undefined) {
            res.status(400).json({ success: false, error: "No email provided" });
            return;
        }

        if (typeof req.body.email !== 'string' || !emailRegex.test(req.body.email)) {
            res.status(400).json({ success: false, error: "Invalid email provided" });
            return;
        }

        const coll = (req as any).db.collection('users');
        let result = await coll.findOne({ email: req.body.email });
        
        if (result !== null) {
            res.status(200).json({ success: true, referral: result.referral, verified: result.verified });
        } else {
            let referrer = null;
            if (typeof req.body.referrer === 'string')
                referrer = await coll.findOne({ referral: req.body.referrer });
            
            let referral = shortid.generate();
            await coll.insertOne({
                _id: ulid(),
                email: req.body.email,
                referral, verified: true,
                referrer_id: referrer !== null ? referrer._id : null
            });

            let fields = [];
            if (referrer !== null) {
                fields.push({
                    name: "Referrer",
                    value: referrer.email
                });
            }

            let footerText = `${req.headers['cf-connecting-ip'] ?? req.headers['x-forwarded-for'] ?? req.socket.remoteAddress}`;
            if (req.headers['cf-ray']) footerText += ` | ${req.headers['cf-ray']}`;

            axios.post(process.env.WEBHOOK_URL, {
                embeds: [
                    {
                        title: "New waiting list user",
                        description: req.body.email,
                        color: 0x00FF00,
                        fields,
                        timestamp: new Date().toISOString(),
                        footer: {
                            "text": footerText
                        }
                    }
                ]
            }).then(() => {}).catch((err) => console.warn(err));

            res.status(200).json({ success: true, referral: referral, verified: true });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

export default handler;
