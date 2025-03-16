import React, { useEffect, useMemo } from "react"
import { styled } from "styled-components"
import { Supertab } from "./Supertab.tsx"
import { useConfig } from "../../lib/config.ts"
import { Link, useLocation, useNavigate } from "react-router"

const RootContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-bottom: 1rem;
    gap: 1rem;
`

const OverviewLink = styled(Link)<{ $show: boolean }>`
    text-decoration: none;
    color: ${(p) => p.theme.theme.primaryColor};
    font-weight: 500;
    letter-spacing: 0.03em;
    margin: auto;
    margin-bottom: 1rem;
    will-change: opacity;
    opacity: 1;
    transition: 0.2s var(--easing) all;

    ${(p) =>
    !p.$show &&
    `
        opacity: 0;
        pointer-events: none;
    `}
`

const SupertabsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1em;
    margin: auto;
    width: max-content;
    z-index: 1;

    @media (max-width: 500px) {
        gap: 0.5rem;
    }

    a {
        text-decoration: none;
    }
`

const NoContentWarning = styled.div`
    margin: auto;
    text-align: center;
    padding: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size: 1.5rem;
    font-weight: 700;
`

const countTrues = (obj: Record<string, boolean>) => {
    return Object.values(obj).filter(Boolean).length
}

export const Supertabs = () => {
    const config = useConfig()
    const location = useLocation()
    const navigate = useNavigate()

    // If there are less than 2 tabs enabled, don't show the supertabs.
    // Instead redirect to the first available tab.
    useEffect(() => {
        if (countTrues(config.use) < 2) {
            const searchParams = location.search
            if (config.use.servers) {
                navigate("/discover/servers" + searchParams)
            } else if (config.use.bots) {
                navigate("/discover/bots" + searchParams)
            } else if (config.use.themes) {
                navigate("/discover/themes" + searchParams)
            }
        }
    }, [config.use, navigate])

    const noTabs = useMemo(() => countTrues(config.use) < 2, [config.use])
    const noContent = useMemo(() => countTrues(config.use) === 0, [config.use])

    if (noTabs) {
        if (noContent) {
            return (
                <NoContentWarning>
                    There is nothing to discover here.<br />
                    (To fix this, enable at least one of the sections in the
                    config.)
                </NoContentWarning>
            )
        }
        return null
    }

    return (
        <RootContainer>
            {!noTabs &&
                (
                    <OverviewLink
                        $show={!location.pathname.endsWith("/discover")}
                        to="/discover"
                    >
                        ← Overview
                    </OverviewLink>
                )}
            <SupertabsContainer>
                {config.use.servers && (
                    <Link to="/discover/servers">
                        <Supertab
                            active={location.pathname.startsWith(
                                "/discover/servers",
                            ) || location.pathname.endsWith("/discover")}
                            type="servers"
                        />
                    </Link>
                )}
                {config.use.bots && (
                    <Link to="/discover/bots">
                        <Supertab
                            active={location.pathname.startsWith(
                                "/discover/bots",
                            ) || location.pathname.endsWith("/discover")}
                            type="bots"
                        />
                    </Link>
                )}
                {config.use.themes && (
                    <Link to="/discover/themes">
                        <Supertab
                            active={location.pathname.startsWith(
                                "/discover/themes",
                            ) || location.pathname.endsWith("/discover")}
                            type="themes"
                        />
                    </Link>
                )}
            </SupertabsContainer>
        </RootContainer>
    )
}
