import { createContext, useContext } from "react"

export interface DiscoverConfig {
    theme: {
        foregroundColor: string
        primaryColor: string
        serversForegroundColor: string
        serversBackgroundColor: string
        serversBackground: string
        botsForegroundColor: string
        botsBackgroundColor: string
        botsBackground: string
        themesForegroundColor: string
        themesBackgroundColor: string
        themesBackground: string
        useSupertabsShadow: boolean
    }
    use: {
        servers: boolean
        bots: boolean
        themes: boolean
    }
}

// The default config is used on our website. Embedded scenarios can override
// this with their own config.
export const defaultConfig: DiscoverConfig = {
    theme: {
        foregroundColor: "white",
        primaryColor: "var(--colour-ultra-pink)",
        serversForegroundColor: "white",
        serversBackgroundColor: "#258AE8",
        serversBackground:
            "linear-gradient(to bottom, rgb(130 130 130 / 0.1), rgb(0 0 0 / 0.4)), #258AE8",
        botsForegroundColor: "white",
        botsBackgroundColor: "#977EFF",
        botsBackground:
            "linear-gradient(to bottom, rgb(130 130 130 / 0.1), rgb(0 0 0 / 0.4)), #977EFF",
        themesForegroundColor: "white",
        themesBackgroundColor: "#E82934",
        themesBackground:
            "linear-gradient(to bottom, rgb(130 130 130 / 0.1), rgb(0 0 0 / 0.4)), #E82934",
        useSupertabsShadow: true,
    },
    use: {
        servers: true,
        bots: true,
        themes: true,
    },
}

export const ConfigContext = createContext<DiscoverConfig>(defaultConfig)

export const useConfig = () => {
    return useContext(ConfigContext)
}
