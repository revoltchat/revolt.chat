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

        const _id = req.query.id;

        const coll = (req as any).db.collection('users');
        let result = await coll.findOne({ _id });
        
        if (result) {
            await coll.updateOne(
                { _id },
                {
                    $set: {
                        email: '<removed>'
                    }
                }
            );

            res.send('Removed your email from the mailing list.\nThis id will stay in the database to not orphan any referral entries.\nIf you would like to reinstate your waiting list position, please forward this email to an admin.');
        } else {
            res.send('Unknown ID.');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

export default handler;
