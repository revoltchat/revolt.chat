import { useEffect, useState } from "react";
import { Platform } from "../../lib/platform";
import {
    ExtendedPlatformInfo,
    EXTENDED_PLATFORM_DATA,
} from "../../lib/platform-data";
import LinkButton from "../ui/LinkButton";
import DownloadParagraph from "./DownloadParagraph";
import DownloadSection from "./DownloadSection";
import LinkButtonRow from "./LinkButtonRow";

interface DownloadSectionWithDataProps {
    platformId: Platform;
}

const DownloadSectionWithData = ({
    platformId,
}: DownloadSectionWithDataProps) => {
    const [platformInfo, setPlatformInfo] =
        useState<ExtendedPlatformInfo | null>(null);

    useEffect(() => {
        setPlatformInfo(EXTENDED_PLATFORM_DATA[platformId]);
    }, [platformId]);

    if (platformInfo === null || platformInfo?.hideOnDownloadPage) return null;

    return (
        <DownloadSection platform={platformId} title={platformInfo.name}>
            <DownloadParagraph>{platformInfo.infoText}</DownloadParagraph>

            <LinkButtonRow>
                {platformInfo.downloads.map((btn, idx) => (
                    <LinkButton
                        href={btn.url}
                        variant={idx === 0 ? "primary" : "regular"}
                    >
                        {btn.label}
                    </LinkButton>
                ))}
            </LinkButtonRow>
        </DownloadSection>
    );
};

export default DownloadSectionWithData;
