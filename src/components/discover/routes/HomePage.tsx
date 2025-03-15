import React, { useEffect } from "react"
import { styled } from "styled-components"
import { useConfig } from "../lib/config.ts"

const HomePageRoot = styled.main`
    margin: 0 auto;
`

interface HomePageProps {
    onFinishLoading: () => void
}

const HomePage = ({ onFinishLoading }: HomePageProps) => {
    const config = useConfig()

    useEffect(() => {
        onFinishLoading()
    }, [onFinishLoading])

    return (
        <HomePageRoot>
            <h1>Discover (Neo)</h1>
            <p>
                This is the Discover page. It is the main page of the Discover
                section of the website.
            </p>
            <p>
                Using following config:{" "}
                <code>{JSON.stringify(config, null, 2)}</code>
            </p>
        </HomePageRoot>
    )
}

export default HomePage
