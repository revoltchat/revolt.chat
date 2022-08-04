import styled from "styled-components";
import HeroButtons from "./HeroButtons";

const Container = styled.div`
    text-align: center;
    padding-bottom: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const CTAHeader = styled.h1`
    font-weight: 900;
    padding: 0;
    margin: 0;
    font-size: 2.25rem;
    line-height: 1.1;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
        font-size: 3rem;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        font-size: 3.7rem;
    }
`;

const PreFooterCTA = () => {
    return (
        <>
            <Container>
                <CTAHeader>Ready yet?</CTAHeader>
                <HeroButtons darker />
            </Container>
        </>
    );
};

export default PreFooterCTA;
