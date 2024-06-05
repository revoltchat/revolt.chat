import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

import fs from "fs";
import path from "path";

const filePath = path.resolve("public", "giscus.css");
const cssBuffer = fs.readFileSync(filePath);

const cors = Cors({
    methods: ["POST", "GET", "HEAD"],
});

function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    fn: Function
) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }

            return resolve(result);
        });
    });
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await runMiddleware(req, res, cors);
    res.status(200).setHeader("Content-Type", "text/css").send(cssBuffer);
}
