import PagePadding from "../components/layout/global/PagePadding";
import PageTitle from "../components/layout/global/PageTitle";
import { GetStaticProps } from "next";
import { renderMarkdown } from "../lib/markdown";
import MarkdownView from "../components/posts/MarkdownView";
import { getLegalFile, LEGALFILES } from "../lib/legal";

interface CommunityGlsProps {
    renderedContents: string;
}

export default function CommunityGuidelines({
    renderedContents,
}: CommunityGlsProps) {
    return (
        <PagePadding>
            <PageTitle>{`Community Guidelines - Revolt`}</PageTitle>
            <MarkdownView rendered={renderedContents}></MarkdownView>
        </PagePadding>
    );
}

export const getStaticProps: GetStaticProps<CommunityGlsProps> = async () => {
    const markdown = await getLegalFile(LEGALFILES.GUIDELINES);
    const rendered = await renderMarkdown(markdown);

    return {
        props: {
            renderedContents: rendered,
        },
    };
};
