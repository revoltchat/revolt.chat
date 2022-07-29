import styled from "styled-components";
import { Platform } from "../../lib/platform";
import PlatformIcon from "./PlatformIcon";

const SectionFlex = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
        flex-direction: row;
        gap: 2rem;
    }
`;

const Icon = styled.div`
    height: 70px;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        padding-right: 1rem;
        border-right: 5px solid ${(p) => p.theme.colors.primary};
    }
`;

const Heading = styled.h2`
    padding-top: 30px;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
        padding-top: 0;
        font-size: 2rem;
    }
`;

interface DownloadSectionProps {
    title: string;
    platform: Platform;
    children: React.ReactNode;
}

const DownloadSection = ({
    title,
    platform,
    children,
}: DownloadSectionProps) => {
    return (
        <SectionFlex>
            <Icon>
                <PlatformIcon platform={platform} />
            </Icon>
            <div>
                <Heading>{title}</Heading>
                {children}
            </div>
        </SectionFlex>
    );
};

export default DownloadSection;
