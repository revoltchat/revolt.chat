import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCurrentPlatform, Platform } from "../../../../lib/platform";
import {
    PlatformButton,
    PLATFORM_BUTTON_DATA,
} from "../../../../lib/platform-data";
import URLs from "../../../../lib/urls";
import Button from "../../../ui/Button";
import LinkButton from "../../../ui/LinkButton";

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;

    a button {
        width: 100%;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
        flex-direction: row;
    }
`;

const OtherPlatforms = styled.a`
    color: ${(p) => p.theme.colors.foregroundGrey};
    font-weight: 300;
`;

const HeroButtons = () => {
    const [platformId, setPlatformId] = useState<Platform | null>();
    const [platformInfo, setPlatformInfo] = useState<PlatformButton | null>();

    useEffect(() => {
        const platformName = getCurrentPlatform();
        const platform = PLATFORM_BUTTON_DATA[platformName];

        setPlatformId(platformName);
        setPlatformInfo(platform);
    }, []);

    return (
        <>
            <Buttons>
                <LinkButton variant="regular-invert" href={URLs.pwa}>
                    Open Web App
                </LinkButton>
                {platformId &&
                    !["other", "ssr"].includes(platformId ?? "") &&
                    (platformInfo?.url === null ? (
                        <Button variant="disabled">
                            Available on {platformInfo?.name} soon
                        </Button>
                    ) : (
                        <LinkButton href={platformInfo?.url} variant="primary">
                            Download for {platformInfo?.name}
                        </LinkButton>
                    ))}
            </Buttons>
            <Link href="/download" passHref>
                <OtherPlatforms>See other platforms</OtherPlatforms>
            </Link>
        </>
    );
};

export default HeroButtons;
