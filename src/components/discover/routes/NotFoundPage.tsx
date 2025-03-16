import React, { useEffect } from "react"
import { styled } from "styled-components"
import Goostle from "../../../assets/goostle.png"
import { Helmet } from "react-helmet-async"

const NotFoundPageRoot = styled.main`
    max-width: min(130ch, 90vw);
    margin: 0 auto;
    display: block;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 4rem;
    padding-top: 4rem;
`

const MainHeading = styled.h1`
    font-size: 4rem;
    font-weight: 750;
    color: ${(p) => p.theme.theme.foregroundColor};
    line-height: 1;
`

const MainHeadingSub = styled.p`
    font-size: 1.5rem;
    color: ${(p) => p.theme.theme.foregroundColor};
    opacity: 0.7;
    margin-bottom: 4rem;
    line-height: 1.5;
`

const GoostleHint = styled.p`
    font-size: 1.2rem;
    color: ${(p) => p.theme.theme.foregroundColor};
    opacity: 0.7;
    margin-top: 2rem;
    margin-bottom: 2rem;
`

const GoostleImage = styled.img`
    width: 10rem;
    opacity: 100%;
    display: block;
    margin: 0 auto;
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
            <Helmet>
                <title>Revolt: 404</title>
            </Helmet>
            <MainHeading>That's a no.</MainHeading>
            <MainHeadingSub>
                We couldn't find the page you were looking for. Maybe it's a
                typo, maybe it's a broken link.
            </MainHeadingSub>
            <GoostleHint>Have you asked Goostle about it?</GoostleHint>
            <GoostleImage
                src={Goostle.src}
                alt="Goostle, a Revolt mascot. A goose with a turtle shell. The name is a portmanteau of goose and turtle."
            />
        </NotFoundPageRoot>
    )
}

export default NotFoundPage
