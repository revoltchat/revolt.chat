import React, { useEffect } from "react"
import { styled } from "styled-components"
import { useConfig } from "../lib/config.ts"
import { HomeHeader } from "../components/headers/HomeHeader.tsx"
import { useDatasource } from "../lib/datasource.ts"
import WithEmphasis from "../components/type/WithEmphasis.tsx"

const HomePageRoot = styled.main`
    margin: 0 auto;
`

interface HomePageProps {
    onFinishLoading: () => void
}

const HomePage = ({ onFinishLoading }: HomePageProps) => {
    const config = useConfig()
    const datasource = useDatasource()

    useEffect(() => {
        onFinishLoading()
    }, [onFinishLoading])

    return (
        <HomePageRoot>
            <HomeHeader />
            <h1>
                <WithEmphasis text="Discover ##(Neo)##" />
            </h1>
            <p>
                <WithEmphasis text="Welcome to the ##main## page of the ##discover## section. Here you can find all the ##bots##, ##themes##, and ##servers## that are available for ##Revolt##. Placeholder text. Placeholder text. Placeholder text." />
            </p>
            <p>
                Using following config:{" "}
                <code>{JSON.stringify(config, null, 2)}</code>
            </p>
        </HomePageRoot>
    )
}

export default HomePage
