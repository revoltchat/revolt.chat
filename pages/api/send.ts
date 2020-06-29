import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        if (req.body.email === undefined) {
            res.status(400).json({ success: false, error: "No email provided" });
            return;
        }

        if (typeof req.body.email !== 'string' || !emailRegex.test(req.body.email)) {
            res.status(400).json({ success: false, error: "Invalid email provided" });
            return;
        }

        try {
            await axios.post(process.env.WEBHOOK_URL, {
                "content": req.body.email
            })
            
            res.status(200).json({ success: true });
        } catch (err) {
            console.error(err);
            res.status(500).json({ success: false, error: "Internal server error" });
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).send("");
    }
}
