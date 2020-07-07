import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import databaseMiddleware from '../../components/middleware/database';

const handler = nc<NextApiRequest, NextApiResponse>();
handler.use(databaseMiddleware);

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.query.id === undefined) {
            res.status(400).json({ success: false, error: "No id provided." });
            return;
        }

        const id = req.query.id;

        const coll = (req as any).db.collection('users');
        let result = await coll.findOne({ id });
        
        if (result) {
            if (result.verified) {
                res.send('Already verified! :)');
                return;
            }

            await coll.updateOne(
                { id },
                {
                    $set: {
                        verified: true
                    }
                }
            );

            res.send('Verified your email! Thanks :)');
        } else {
            res.send('Unknown ID. :(');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

export default handler;
