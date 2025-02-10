import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const changelogEntries = (await getCollection("changelog")).toSorted((a, b) => {
		return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
	});
	return rss({
		title: "Revolt Changelog",
		description: "Feed of Revolt changelogs.",
		site: context.site,
		trailingSlash: false,
		items: changelogEntries.map((entry) => ({
			title: entry.data.title,
			pubDate: entry.data.date,
			description: entry.data.description,
			author: entry.data.author,
			link: `/updates/${entry.slug}/`,
		})),
		customData: `<language>en-gb</language>`,
	});
}
