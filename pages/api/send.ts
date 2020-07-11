import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import axios from 'axios';
import { ulid } from 'ulid';
import shortid from 'shortid';
import { readFileSync } from 'fs';
import nodemailer from 'nodemailer';

import databaseMiddleware from '../../components/middleware/database';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const handler = nc<NextApiRequest, NextApiResponse>();
handler.use(databaseMiddleware);

const verificationEmail = readFileSync('email/verify.html').toString();

let transporter = nodemailer.createTransport({
    host: "mail.fatalerrorcoded.eu",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

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

        const email = req.body.email.toLowerCase();

        const coll = (req as any).db.collection('users');
        let result = await coll.findOne({ email });
        
        if (result !== null) {
            res.status(200).json({ success: true, referral: result.referral, verified: result.verified });
        } else {
            let referrer = null;
            if (typeof req.body.referrer === 'string')
                referrer = await coll.findOne({ referral: req.body.referrer });
            
            let _id = ulid();
            let referral = shortid.generate();
            let source_ip = req.headers['cf-connecting-ip'] ?? req.headers['x-forwarded-for'] ?? req.socket.remoteAddress;

            let fields = [{
                name: "ID",
                value: _id,
                inline: true
            }];
            if (referrer !== null) {
                fields.push({
                    name: "Referrer",
                    value: referrer.email,
                    inline: true
                });
            }

            let footerText = `${source_ip}`;
            if (req.headers['cf-ray']) footerText += ` | ${req.headers['cf-ray']}`;

            axios.post(process.env.WEBHOOK_URL, {
                embeds: [
                    {
                        title: "New user added!",
                        description: email,
                        color: 0x31BF7E,
                        fields,
                        timestamp: new Date().toISOString(),
                        footer: {
                            "text": footerText
                        }
                    }
                ]
            }).then(() => {}).catch((err) => console.warn(err));

            await transporter.sendMail({
                from: '"REVOLT" <noreply@revolt.chat>',
                to: email,
                subject: "Verify your email.",
                text: `Thanks for signing up!\nWe just need to verify your email and you'll be good to go.\nhttps://revolt.chat/api/verify?id=${_id}\n\nSent by Revolt • Do not reply to this email.`,
                html: verificationEmail.replace(/{{id}}/g, _id),
            });

            await coll.insertOne({
                _id,
                email, referral,
                verified: false,
                referrer_id: referrer !== null ? referrer._id : null,
                source_ip
            });

            res.status(200).json({ success: true, referral: referral, verified: false });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

export default handler;
