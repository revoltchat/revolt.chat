import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import databaseMiddleware from '../../components/middleware/database';
import Axios from 'axios';

const handler = nc<NextApiRequest, NextApiResponse>();
handler.use(databaseMiddleware);

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.query.id === undefined) {
            res.status(400).json({ success: false, error: "No id provided." });
            return;
        }

        const _id = req.query.id;

        const coll = (req as any).db.collection('users');
        let result = await coll.findOne({ _id });
        
        if (result) {
            if (result.verified) {
                res.writeHead(303, { Location: '/' });
                return;
            }

            await coll.updateOne(
                { _id },
                {
                    $set: {
                        verified: true
                    }
                }
            );

            Axios.post(process.env.WEBHOOK_URL, {
                embeds: [
                    {
                        title: "User verified their email.",
                        description: _id,
                        color: 0x977EFF,
                        timestamp: new Date().toISOString()
                    }
                ]
            }).then(() => {}).catch((err) => console.warn(err));

            res.writeHead(303, { Location: '/' });
        } else {
            res.send('Unknown ID. :(');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

export default handler;
