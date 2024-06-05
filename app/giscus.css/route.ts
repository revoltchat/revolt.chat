import { readFileSync } from "fs";
import path from "path";

export const dynamic = "force-dynamic"; // defaults to auto

const filePath = path.resolve("app", "giscus.css", "giscus.css");
const cssBuffer = readFileSync(filePath);

export async function GET() {
    return new Response(cssBuffer, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
    });
}
