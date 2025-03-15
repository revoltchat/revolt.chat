import React, { useCallback, useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router"
import { ThemeProvider } from "styled-components"
import HomePage from "./routes/HomePage.tsx"
import NotFoundPage from "./routes/NotFoundPage.tsx"
import { styled } from "styled-components"
import { ConfigContext, defaultConfig } from "./lib/config.ts"
import type { DiscoverConfig } from "./lib/config.ts"

const RootStyle = styled.div`
    color: ${(p) => p.theme.theme.foregroundColor};
`

const DiscoverRoot = ({ config: cfgBase64 }: { config: string }) => {
    const [configValue, setConfigValue] = useState<DiscoverConfig>(
        defaultConfig,
    )

    useEffect(() => {
        try {
            const cfg = JSON.parse(atob(cfgBase64))
            console.log("Parsed config", cfg)
            setConfigValue(cfg)
        } catch (e) {
            console.error("Failed to parse config", e)
        }
    }, [cfgBase64])

    const onFinishLoading = useCallback(() => {
        document.querySelector("[data-discover-spinner]")?.remove()
    }, [])

    return (
        <ConfigContext.Provider value={configValue}>
            <ThemeProvider theme={configValue}>
                <RootStyle>
                    <Router>
                        <Routes>
                            <Route
                                path="/discover"
                                element={
                                    <HomePage
                                        onFinishLoading={onFinishLoading}
                                    />
                                }
                            />
                            <Route
                                path="*"
                                element={
                                    <NotFoundPage
                                        onFinishLoading={onFinishLoading}
                                    />
                                }
                            />
                        </Routes>
                    </Router>
                </RootStyle>
            </ThemeProvider>
        </ConfigContext.Provider>
    )
}

export default DiscoverRoot
