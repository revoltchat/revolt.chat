import styled from "styled-components";
import HeroButtons from "./HeroButtons";

const Container = styled.div`
    text-align: center;
    padding-top: 13rem;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const Slogan = styled.h1`
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

    @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
        font-size: 4.5rem;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.xl}) {
        font-size: 70pt;
    }
`;

const Pitch = styled.h3`
    font-weight: 400;
    line-height: 1.2;
    padding: 0;
    margin: 0;
    color: ${(p) => p.theme.colors.foregroundGrey};
    max-width: 70vw;
    font-size: 1rem;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        font-size: 1.3rem;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
        max-width: 60vw;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.xl}) {
        max-width: 40vw;
    }
`;

const ProductImage = styled.img`
    padding-top: 6rem;
    max-width: 90vw;
    margin: auto;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.xl}) {
        max-width: 70vw;
    }
`;

const IndexHero = () => {
    return (
        <>
            <Container>
                <Slogan>
                    Find your community,
                    <br />
                    connect with the world.
                </Slogan>
                <Pitch>
                    The Revolt app is one of the best ways to stay connected
                    with your friends and community without sacrificing any
                    usability. We focus only on the user, and you can be sure
                    that your conversations are confidential and your data is
                    secure.
                </Pitch>
                <HeroButtons />
            </Container>
        </>
    );
};

export default IndexHero;
