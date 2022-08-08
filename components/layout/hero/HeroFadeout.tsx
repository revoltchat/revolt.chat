import styled from "styled-components";
import RevoltUI from "../../../assets/illustrations/Revolt-UI.svg";

const FadeoutVisual = styled.div`
    width: 100vw;
    background: url(${(p: { fadeoutBase64: string }) => p.fadeoutBase64})
        no-repeat ${(p) => p.theme.colors.background};
    background-size: cover;
    display: flex;
    justify-content: center;
`;

const KeyVisual = styled.img`
    width: 90vw;
    pointer-events: none;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
        width: 50vw;
    }
`;

const FadeoutBackground = styled.path`
    background-color: ${(p) => p.theme.colors.primary};
`;

/*
 ? The fadeout has had some layout jump issues, due to the browser
 ? needing to request it first.
   As the fadeout is one of the index page's main elements, this is
   seen as potentially catastrophic. Therefore, we are statically
   injecting the base64 file contents of the SVG ahead of time during
   static compilation. This means the data is baked into the page
   already and the browser does not need to perform another request
   to get it.
*/

interface HeroFadeoutProps {
    staticFadeoutUrl: string;
}

const HeroFadeout = ({ staticFadeoutUrl }: HeroFadeoutProps) => {
    return (
        <FadeoutBackground>
            <FadeoutVisual fadeoutBase64={staticFadeoutUrl}>
                <KeyVisual src={RevoltUI.src} />
            </FadeoutVisual>
        </FadeoutBackground>
    );
};

export default HeroFadeout;
