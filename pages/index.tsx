import IndexHero from "../components/layout/hero/IndexHero/IndexHero";
import styled from "styled-components";
import HeroFadeout from "../components/layout/hero/HeroFadeout";

const HeroContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundLighter};
`;

export default function Home() {
    return (
        <>
            <HeroContainer>
                <IndexHero />
                <HeroFadeout />
            </HeroContainer>
        </>
    );
}
