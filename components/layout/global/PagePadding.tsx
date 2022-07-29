import styled from "styled-components";

const Padding = styled.div`
    padding-top: 6rem;
    max-width: 90vw;
    margin: auto;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.xl}) {
        max-width: 70vw;
    }
`;

interface PagePaddingProps {
    children: React.ReactNode;
}

const PagePadding = (props: PagePaddingProps) => {
    return <Padding>{props.children}</Padding>;
};

export default PagePadding;
