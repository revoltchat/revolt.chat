import styles from './Markdown.module.scss';

interface Props {
    rendered?: string;
}

export function Markdown({ rendered }: Props) {
    if (typeof rendered === "undefined") return null;
    if (rendered.length === 0) return null;

    return (
        <span
            className={styles.markdown}
            dangerouslySetInnerHTML={{
                __html: rendered
            }}
        />
    );
}
