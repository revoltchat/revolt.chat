import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type Post = {
    title: string;
    description: string;
    coverImage?: string;
    date: string;
    author: string;
    slug: string;
    content: string;
    readingTime: number;
    giscus?: boolean;
};

const postsDirectory = path.join(process.cwd(), "posts");

export const getAllPostSlugs = () => {
    return fs.readdirSync(postsDirectory);
};

export const getPostBySlug: (slug: string) => Post = (slug) => {
    const realSlug = slug.replace(/.md$/, "");
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    const readingMins = readingTime(content).minutes;
    const displayTime = Math.ceil(parseFloat(readingMins.toFixed(2))); // taken from reading-time

    return {
        content,
        readingTime: displayTime,
        slug: realSlug,
        ...data,
    } as Post; // cast is required due to small gray-matter quirk
};

export const getAllPosts: () => Post[] = () => {
    const slugs = getAllPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug.replace(/.md$/, "")))
        // sort by date, newest first
        .sort((post1, post2) =>
            new Date(post1.date) < new Date(post2.date) ? 1 : -1
        );
    return posts;
};
