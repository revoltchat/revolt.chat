import styled from "styled-components";

const FeatureFlex = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10rem auto;
    gap: 2rem;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        flex-direction: ${(p: { reverse: boolean }) =>
            p.reverse ? "row" : "row-reverse"};
        text-align: ${(p: { reverse: boolean }) =>
            p.reverse ? "left" : "right"};
    }
`;

const FeatureText = styled.div`
    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        flex: 50%;
    }
`;

const FeatureDescription = styled.div`
    font-size: 1.1rem;
    line-height: 1.5;
`;

const FeatureHeading = styled.h2`
    font-size: 2rem;
    font-weight: 900;
    line-height: 1.2;
    padding-bottom: 1.5rem;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        line-height: 1;
        font-size: 3.5rem;
    }
`;

const FeatureVisual = styled.img`
    pointer-events: none;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        flex: 50%;
        max-width: 50%;
    }
`;

interface FeatureProps {
    heading: string;
    image: string;
    children: React.ReactNode;
    reverse?: boolean;
}

const Feature = ({
    children,
    heading,
    image,
    reverse = false,
}: FeatureProps) => {
    return (
        <FeatureFlex reverse={reverse}>
            <FeatureVisual src={image} />
            <FeatureText>
                <FeatureHeading>{heading}</FeatureHeading>
                <FeatureDescription>{children}</FeatureDescription>
            </FeatureText>
        </FeatureFlex>
    );
};

export default Feature;
