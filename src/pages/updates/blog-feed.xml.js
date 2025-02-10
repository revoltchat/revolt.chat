import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const blogEntries = (await getCollection("blog"))
		.filter((entry) => entry.data.hidden !== true)
		.toSorted((a, b) => {
			return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
		});
	return rss({
		title: "Revolt Blog",
		description: "Feed of Revolt blog posts.",
		site: context.site,
		trailingSlash: false,
		items: blogEntries.map((entry) => ({
			title: entry.data.title,
			pubDate: entry.data.date,
			description: entry.data.description,
			author: entry.data.author,
			link: `/updates/${entry.slug}/`,
		})),
		customData: `<language>en-gb</language>`,
	});
}
