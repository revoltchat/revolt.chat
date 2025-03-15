import React, { useEffect } from "react"
import { styled } from "styled-components"

const NotFoundPageRoot = styled.main`
    max-width: min(130ch, 90vw);
    margin: 0 auto;
    display: grid;
    padding-bottom: 16rem;
    padding-top: 16rem;
`

interface NotFoundPageProps {
    onFinishLoading: () => void
}

const NotFoundPage = ({ onFinishLoading }: NotFoundPageProps) => {
    useEffect(() => {
        onFinishLoading()
    }, [onFinishLoading])

    return (
        <NotFoundPageRoot>
            <h1>404 Not Found</h1>
            <p>
                The page you are looking for could not be found. Please check
                the URL and try again.
            </p>
        </NotFoundPageRoot>
    )
}

export default NotFoundPage
