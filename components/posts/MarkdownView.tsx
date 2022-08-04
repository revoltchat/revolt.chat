import styled from "styled-components";

const MarkdownContainer = styled.div`
    max-width: 100%;
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.7;
    margin: auto;

    code,
    pre {
        font-size: 1em;
        background-color: ${(p) => p.theme.colors.backgroundLighter};
        padding: 3px;
        border-radius: 3px;
    }

    pre {
        font-weight: 400;
        padding: 1rem;
    }

    blockquote {
        margin-left: 0;
        padding: 1px 0 1px 24px;
        border-left: 3px solid ${(p) => p.theme.colors.primary};
    }

    img {
        max-width: 100%;
    }

    hr {
        border: 0;
        margin-top: 1rem;
        margin-bottom: 1rem;
        border-top: 3px solid ${(p) => p.theme.colors.disabledGrey};
        opacity: 0.3;
    }

    a {
        text-decoration: underline;
    }

    th {
        border-bottom: 2px solid ${(p) => p.theme.colors.primary};
        text-align: left;
    }

    table,
    td,
    th {
        border-collapse: collapse;
    }

    td,
    th {
        padding: 0.5em 1em;
    }

    th,
    tr:nth-child(2n) {
        background-color: rgba(32, 48, 70, 0.4);
    }
`;

interface MarkdownViewProps {
    rendered: string;
}

const MarkdownView = ({ rendered }: MarkdownViewProps) => {
    return <MarkdownContainer dangerouslySetInnerHTML={{ __html: rendered }} />;
};

export default MarkdownView;
