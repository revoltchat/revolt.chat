import { existsSync } from "fs";
import { readFile } from "fs/promises";
import path from "path";

const legalDirectory = path.join(process.cwd(), "legal");

export const LEGALFILES = {
    GUIDELINES: path.join(legalDirectory, "Acceptable Usage Policy.md"),
    PRIVACY: path.join(legalDirectory, "Privacy Policy.md"),
    TERMS: path.join(legalDirectory, "Terms of Service.md"),
    ABOUT: path.join(legalDirectory, "About.md"),
};

if (!existsSync(legalDirectory))
    throw new Error("Legal directory missing. Did you get submodules?");

export const getLegalFile: (path: string) => Promise<string> = async (path) => {
    const file = await readFile(path);
    const rawMarkdown = file.toString();
    return rawMarkdown;
};
