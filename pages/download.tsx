import PagePadding from "../components/layout/global/PagePadding";
import PageHeading from "../components/layout/global/PageHeading";
import RecommendedPlatform from "../components/download/RecommendedPlatform";
import { PLATFORM_BUTTON_DATA } from "../lib/platform-data";
import DownloadSectionWithData from "../components/download/DownloadSectionWithData";
import { Platform } from "../lib/platform";
import PageTitle from "../components/layout/global/PageTitle";

export default function Download() {
    return (
        <PagePadding>
            <PageTitle>Download - Revolt</PageTitle>
            <PageHeading>Download Revolt</PageHeading>
            <RecommendedPlatform />

            {(Object.keys(PLATFORM_BUTTON_DATA) as Platform[]).map(
                (platform) => (
                    <DownloadSectionWithData
                        platformId={platform}
                        key={platform}
                    />
                )
            )}
        </PagePadding>
    );
}
