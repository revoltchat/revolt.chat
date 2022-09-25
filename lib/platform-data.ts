import { Platform } from "./platform";
import URLs from "./urls";

export type PlatformButton = {
    name: string;
    url: string | null;
    source: string | null;
};

export type PlatformButtonData = Record<Platform, PlatformButton>;

export const PLATFORM_BUTTON_DATA: PlatformButtonData = {
    android: {
        name: "Android",
        source: "Google Play",
        url: URLs.android.googlePlay,
    },
    ios: {
        name: "iOS",
        source: null,
        url: null,
    },
    linux: {
        name: "Linux",
        source: "FlatHub",
        url: URLs.electron.flathub,
    },
    windows: {
        name: "Windows",
        source: "Microsoft Store",
        url: URLs.electron.microsoftStore,
    },
    macos: {
        name: "macOS",
        source: null,
        url: URLs.electron.releases,
    },
    ssr: {
        name: "SSR",
        source: null,
        url: null,
    },
    other: {
        name: "Unknown",
        source: null,
        url: null,
    },
};

export type DownloadLink = {
    label: string;
    url: string;
};

export type ExtendedPlatformInfo = {
    downloads: DownloadLink[];
    name: string;
    infoText: string;
    hideOnDownloadPage?: boolean;
};

export type ExtendedPlatformMap = Record<Platform, ExtendedPlatformInfo>;

export const EXTENDED_PLATFORM_DATA: ExtendedPlatformMap = {
    android: {
        name: "Android",
        downloads: [
            {
                label: "Google Play",
                url: URLs.android.googlePlay,
            },
            {
                label: "F-Droid",
                url: URLs.android.fDroid,
            },
        ],
        infoText:
            "The Android app is available on Google Play and the Revolt F-Droid repository.",
    },
    ios: {
        name: "iOS",
        downloads: [
            {
                label: "Open Web App",
                url: URLs.pwa,
            },
        ],
        infoText:
            "While we don't offer a dedicated iOS application yet, " +
            "you can install the web app to your home screen using " +
            "Safari in the meantime.",
    },
    linux: {
        name: "Linux",
        downloads: [
            {
                label: "Flathub",
                url: URLs.electron.flathub,
            },
            {
                label: "AUR",
                url: URLs.electron.aur,
            },
            {
                label: "GitHub Releases",
                url: URLs.electron.releases,
            },
        ],
        infoText:
            "The Linux app is available on Flathub, the Arch User " +
            "Repository, and in some other formats (.AppImage, .tar.gz) " +
            "on GitHub.",
    },
    macos: {
        name: "macOS",
        downloads: [
            {
                label: "GitHub Releases",
                url: URLs.electron.releases,
            },
        ],
        infoText: "The macOS app is available as a .dmg from GitHub Releases.",
    },
    windows: {
        name: "Windows",
        downloads: [
            {
                label: "Microsoft Store",
                url: URLs.electron.microsoftStore,
            },
            {
                label: "GitHub Releases",
                url: URLs.electron.releases,
            },
        ],
        infoText:
            "The Windows app is available on Winget as Revolt.RevoltDesktop. " +
            "It is also published on the Microsoft Store, a standalone installer " +
            "is available on GitHub.",
    },
    other: {
        name: "Other",
        downloads: [],
        infoText: "Unknown",
        hideOnDownloadPage: true,
    },
    ssr: {
        name: "SSR",
        downloads: [],
        infoText: "SSR",
        hideOnDownloadPage: true,
    },
};
