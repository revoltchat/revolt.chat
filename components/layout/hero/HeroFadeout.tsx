import styled from "styled-components";

const FadeoutContainer = styled.div`
    width: 100vw;
    background-color: ${(p) => p.theme.colors.background};
`;

const FadeoutPath = styled.path`
    fill: ${(p) => p.theme.colors.backgroundLighter};
`;

const HeroFadeout = () => {
    return (
        <FadeoutContainer>
            <svg version="1.1" viewBox="0 0 1920 513.1">
                <FadeoutPath
                    d="M1920,0H0v513.1c0,0,252.8-232.7,476.3-237.9c187.3-4.4,240.1,21.1,436.4-67.4
			c273.2-123.2,480.8-145.1,695.5-18.2c22.8,13.5,217.6,105.8,311.9,90.1L1920,0z"
                />
            </svg>
        </FadeoutContainer>
    );
};

export default HeroFadeout;
