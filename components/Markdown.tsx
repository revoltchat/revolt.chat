import MarkdownIt from "markdown-it";
import styles from './Markdown.module.scss';
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItCheckbox from "markdown-it-checkbox";

export const md: MarkdownIt = MarkdownIt({ breaks: true, linkify: true })
    .use(MarkdownItAnchor, { level: 3 })
    .use(MarkdownItCheckbox);

interface Props {
    content?: string;
}

export function Markdown({ content }: Props) {
    if (typeof content === "undefined") return null;
    if (content.length === 0) return null;

    return (
        <span
            className={styles.markdown}
            dangerouslySetInnerHTML={{
                __html: md.render(content)
            }}
        />
    );
}
