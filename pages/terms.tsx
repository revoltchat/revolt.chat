import PagePadding from "../components/layout/global/PagePadding";
import PageTitle from "../components/layout/global/PageTitle";
import { GetStaticProps } from "next";
import { renderMarkdown } from "../lib/markdown";
import MarkdownView from "../components/posts/MarkdownView";
import { getLegalFile, LEGALFILES } from "../lib/legal";

interface TermsProps {
    renderedContents: string;
}

export default function Terms({ renderedContents }: TermsProps) {
    return (
        <PagePadding>
            <PageTitle>{`Terms of Service - Revolt`}</PageTitle>
            <MarkdownView rendered={renderedContents}></MarkdownView>
        </PagePadding>
    );
}

export const getStaticProps: GetStaticProps<TermsProps> = async () => {
    const markdown = await getLegalFile(LEGALFILES.TERMS);
    const rendered = await renderMarkdown(markdown);

    return {
        props: {
            renderedContents: rendered,
        },
    };
};
