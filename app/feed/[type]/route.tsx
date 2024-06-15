import { Feed } from "feed";
import { getAllPosts } from "../../../lib/posts";

export async function GET(
    req,
    { params }: { params: { type: "rss" | "atom" | "json" } }
) {
    // Determine output format
    let format = "rss";
    if (params.type === "rss") format = "rss";
    else if (params.type === "atom") format = "atom";
    else if (params.type === "json") format = "json";

    // Collect feed data and entries
    const feed = new Feed({
        title: "Revolt Chat Blog",
        description: "Newsfeed for the Revolt Chat Blog",
        copyright: "The Revolt Developers",
        id: "https://revolt.chat/",
        link: "https://revolt.chat/",
    });

    const posts = getAllPosts();
    let latestUpdate: Date = new Date(0);
    posts.forEach((post) => {
        const date = new Date(post.date);
        if (date > latestUpdate) latestUpdate = date;

        feed.addItem({
            title: post.title,
            link: "https://revolt.chat/posts/" + post.slug,
            date: date,
            description: post.content,
            content: post.content,
            image: "https://revolt.chat" + post.coverImage,
            author: [{ name: post.author }],
        });
    });
    feed.options.updated = latestUpdate;

    // Create and send the formatted data
    switch (format) {
        case "atom":
            return new Response(feed.atom1(), {
                status: 200,
                headers: {
                    "Content-Type": "application/atom+xml",
                },
            });
        case "json":
            return new Response(feed.json1(), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        case "rss":
            return new Response(feed.rss2(), {
                status: 200,
                headers: {
                    "Content-Type": "application/rss+xml",
                },
            });
    }
}
