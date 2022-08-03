import styled from "styled-components";
import RevoltUI from "../../../assets/illustrations/Revolt-UI.svg";
import Fadeout from "../../../assets/illustrations/Fadeout.svg";

const FadeoutVisual = styled.div`
    width: 100vw;
    background: url(${Fadeout.src}) no-repeat
        ${(p) => p.theme.colors.background};
    background-size: cover;
    display: flex;
    justify-content: center;
`;

const KeyVisual = styled.img`
    width: 90vw;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
        width: 50vw;
    }
`;

const FadeoutBackground = styled.path`
    background-color: ${(p) => p.theme.colors.primary};
`;

const HeroFadeout = () => {
    return (
        <FadeoutBackground>
            <FadeoutVisual>
                <KeyVisual src={RevoltUI.src} />
            </FadeoutVisual>
        </FadeoutBackground>
    );
};

export default HeroFadeout;
