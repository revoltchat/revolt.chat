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

    const osName = Bowser.parse(window.navigator.userAgent).os.name;

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
