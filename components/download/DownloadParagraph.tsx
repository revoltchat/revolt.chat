import styled from "styled-components";

const Paragraph = styled.p`
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin: 0;
`;

const DownloadParagraph = ({ children }: { children: React.ReactNode }) => {
    return <Paragraph>{children}</Paragraph>;
};

export default DownloadParagraph;
