import { NextApiRequest, NextApiResponse } from "next";
import { Feed } from "feed";
import { getAllPosts } from "../../lib/posts";

export default function Newsfeed(req : NextApiRequest, res : NextApiResponse) {
    // Determine output format
    let format = "rss";
    if (req.query["format"] == "rss") format="rss";
    else if (req.query["format"] == "atom") format="atom";
    else if (req.query["format"] == "json") format="json";

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
        const date = new Date(post.date)
        if(date > latestUpdate)
            latestUpdate = date;

        feed.addItem({
            title: post.title,
            link: "https://revolt.chat/posts/" + post.slug,
            date: date,
            description: post.content,
            content: post.content,
            image: "https://revolt.chat" + post.coverImage,
            author: [{ name: post.author }],
        });
    })
    feed.options.updated = latestUpdate;

    // Create and send the formatted data
    switch(format) {
        case "atom":
            res.setHeader("Content-Type", "application/atom+xml");    
            res.send(feed.atom1());
            break;
        case "json":
            res.setHeader("Content-Type", "application/json");    
            res.send(feed.json1());
            break;
        case "rss":
            res.setHeader("Content-Type", "application/rss+xml");
            res.send(feed.rss2());
            break;
    }
    
}
