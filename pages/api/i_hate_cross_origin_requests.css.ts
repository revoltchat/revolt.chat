import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import path from "path";

const filePath = path.resolve("public", "giscus.css");
const cssBuffer = fs.readFileSync(filePath);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).send(cssBuffer);
}
