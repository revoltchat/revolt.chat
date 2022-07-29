import { useEffect, useState } from "react";
import { Platform, getCurrentPlatform } from "../../lib/platform";
import styled from "styled-components";
import { PlatformButton, PLATFORM_BUTTON_DATA } from "../../lib/platform-data";
import DownloadSectionWithData from "./DownloadSectionWithData";

const RecommendedBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.3rem;
    margin-top: 1rem;
    margin-bottom: 6rem;
    border-bottom: 3px solid ${(p) => p.theme.colors.primary};
`;

const Heading = styled.h2`
    font-weight: 700;
`;

const RecommendedPlatform = () => {
    const [platformId, setPlatformId] = useState<Platform | null>();
    const [platformInfo, setPlatformInfo] = useState<PlatformButton | null>();

    useEffect(() => {
        const platformName = getCurrentPlatform();
        const platform = PLATFORM_BUTTON_DATA[platformName];

        setPlatformId(platformName);
        setPlatformInfo(platform);
    }, []);

    if (!platformId || platformId === "other") return null;

    return (
        <RecommendedBox>
            <Heading>It looks like you're on {platformInfo.name}.</Heading>
            <DownloadSectionWithData platformId={platformId} />
        </RecommendedBox>
    );
};

export default RecommendedPlatform;
