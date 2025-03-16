import React, { useEffect } from "react"
import { styled } from "styled-components"
import { ThemesHeader } from "../components/headers/ThemesHeader.tsx"

const ThemesPageRoot = styled.main`
    margin: 0 auto;
`

interface ThemesPageProps {
    onFinishLoading: () => void
}

const ThemesPage = ({ onFinishLoading }: ThemesPageProps) => {
    useEffect(() => {
        onFinishLoading()
    }, [onFinishLoading])

    return (
        <ThemesPageRoot>
            <ThemesHeader />
        </ThemesPageRoot>
    )
}

export default ThemesPage
