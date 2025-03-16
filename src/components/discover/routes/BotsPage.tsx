import React, { useEffect } from "react"
import { styled } from "styled-components"
import { BotsHeader } from "../components/headers/BotsHeader.tsx"

const BotsPageRoot = styled.main`
    margin: 0 auto;
`

interface BotsPageProps {
    onFinishLoading: () => void
}

const BotsPage = ({ onFinishLoading }: BotsPageProps) => {
    useEffect(() => {
        onFinishLoading()
    }, [onFinishLoading])

    return (
        <BotsPageRoot>
            <BotsHeader />
        </BotsPageRoot>
    )
}

export default BotsPage
