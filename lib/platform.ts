import Bowser from "bowser";

export type Platform =
    | "windows"
    | "macos"
    | "linux"
    | "ios"
    | "android"
    | "other"
    | "ssr";

export const getCurrentPlatform: () => Platform = () => {
    if (typeof window === "undefined") return "ssr";

    let rawOSName = Bowser.parse(window.navigator.userAgent).os.name;
    
    // detect ipad users
    const osName = rawOSName === "macOS" && window.navigator.maxTouchPoints > 0 ? "iOS" : rawOSName;

    switch (osName) {
        case "Windows":
            return "windows";
        case "Linux":
            return "linux";
        case "macOS":
            return "macos";
        case "Android":
            return "android";
        case "iOS":
            return "ios";
        default:
            return "other";
    }
};
