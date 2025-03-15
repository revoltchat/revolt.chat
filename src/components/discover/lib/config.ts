import { createContext, useContext } from "react"

export interface DiscoverConfig {
    theme: {
        foregroundColor: string
    }
}

// The default config is used on our website. Embedded scenarios can override
// this with their own config.
export const defaultConfig: DiscoverConfig = {
    theme: {
        foregroundColor: "white",
    },
}

export const ConfigContext = createContext<DiscoverConfig>(defaultConfig)

export const useConfig = () => {
    return useContext(ConfigContext)
}
