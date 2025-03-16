import React, { useEffect } from "react"
import { styled } from "styled-components"
import { ServersHeader } from "../components/headers/ServersHeader.tsx"

const ServersPageRoot = styled.main`
    margin: 0 auto;
`

interface ServersPageProps {
    onFinishLoading: () => void
}

const ServersPage = ({ onFinishLoading }: ServersPageProps) => {
    useEffect(() => {
        onFinishLoading()
    }, [onFinishLoading])

    return (
        <ServersPageRoot>
            <ServersHeader />
        </ServersPageRoot>
    )
}

export default ServersPage
