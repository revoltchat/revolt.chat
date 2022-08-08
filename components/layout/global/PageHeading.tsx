import styled from "styled-components";

const Heading = styled.h1`
    font-weight: 700;
    font-size: 2rem;
    padding-top: 0.5em;
    padding-bottom: 0.5em;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.xl}) {
        font-size: 3rem;
    }
`;

interface PageHeadingProps {
    children: React.ReactNode;
}

const PageHeading = (props: PageHeadingProps) => {
    return <Heading>{props.children}</Heading>;
};

export default PageHeading;
