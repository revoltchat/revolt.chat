import { styled } from "styled-components"
import DefaultBackground from "../../../../assets/revoltbg.png"

export const HeaderBase = styled.header<{ bgSrc?: string }>`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: auto;
    width: min(130ch, 90vw);
    padding: 3rem;
    border-radius: 2rem;
    background-image: url(${(p) => p.bgSrc ?? DefaultBackground.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    gap: 1rem;
    z-index: 10;
    position: relative;
    color: white; // Do not respect foreground colour because there is a background
`

export const HeaderHeading = styled.h1`
    font-weight: 700;
    font-size: 4em;
    margin: 0;
    line-height: 1;

    span {
        color: #ff005c; // Dito line 20
        filter: drop-shadow(0 0.4rem 0.4rem rgb(0 0 0 / 0.2));
    }
`

export const HeaderMarketingText = styled.p`
    font-size: 1.3em;
    margin: 0;
    opacity: 0.8;
`
