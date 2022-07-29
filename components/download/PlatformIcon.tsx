import { Tux } from "@styled-icons/boxicons-logos";
import { QuestionMark } from "@styled-icons/boxicons-regular";
import { Platform } from "../../lib/platform";
import AndroidIcon from "../../assets/icons/Android.svg";
import iOSIcon from "../../assets/icons/iOS.svg";
import macOSIcon from "../../assets/icons/macOS.svg";
import WindowsIcon from "../../assets/icons/Windows.svg";
import styled from "styled-components";

const Icon = styled.img`
    width: 70px;
    height: 70px;
    pointer-events: none;
    user-select: none;
`;

const PlatformIcon = ({ platform }: { platform: Platform }) => {
    switch (platform) {
        case "android":
            return <Icon src={AndroidIcon.src} />;
        case "ios":
            return <Icon src={iOSIcon.src} />;
        case "linux":
            return <Tux size={70} />;
        case "macos":
            return <Icon src={macOSIcon.src} />;
        case "windows":
            return <Icon src={WindowsIcon.src} />;
        default:
            return <QuestionMark size={70} />;
    }
};

export default PlatformIcon;
