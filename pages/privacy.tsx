import PagePadding from "../components/layout/global/PagePadding";
import PageTitle from "../components/layout/global/PageTitle";
import { GetStaticProps } from "next";
import { renderMarkdown } from "../lib/markdown";
import MarkdownView from "../components/posts/MarkdownView";
import { getLegalFile, LEGALFILES } from "../lib/legal";

interface PrivacyPolicyProps {
    renderedContents: string;
}

export default function PrivacyPolicy({
    renderedContents,
}: PrivacyPolicyProps) {
    return (
        <PagePadding>
            <PageTitle>{`Privacy Policy - Revolt`}</PageTitle>
            <MarkdownView rendered={renderedContents}></MarkdownView>
        </PagePadding>
    );
}

export const getStaticProps: GetStaticProps<PrivacyPolicyProps> = async () => {
    const markdown = await getLegalFile(LEGALFILES.PRIVACY);
    const rendered = await renderMarkdown(markdown);

    return {
        props: {
            renderedContents: rendered,
        },
    };
};
