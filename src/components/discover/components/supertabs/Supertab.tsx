import React from "react"
import { styled } from "styled-components"
import Robot from "../../../../assets/apache2/robot.svg"
import Compass from "../../../../assets/apache2/compass.svg"
import Palette from "../../../../assets/apache2/palette-swatch.svg"

interface SupertabProps {
    type: "servers" | "bots" | "themes"
    active: boolean
}

const SupertabRoot = styled.div<SupertabProps>`
    cursor: pointer;
    font-size: 1.2rem;
    display: inline-block;
    padding: 0.4rem 0.8rem;
    border-radius: 9999px;
    color: ${(p) => p.theme.theme.foregroundColor};
    letter-spacing: 0.04em;
    ${(p) =>
    p.theme.theme.useSupertabsShadow && "box-shadow: 0 10px 50px 0 black;"}
    user-select: none;
    will-change: filter, opacity, transform;
    transition: 0.2s var(--easing) all;
    display: flex;
    align-items: center;
    z-index: 1;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }

    ${(p) =>
    p.type === "servers" &&
    `
        background: ${p.theme.theme.serversBackground};
        color: ${p.theme.theme.serversForegroundColor};
    `}
    ${(p) =>
    p.type === "bots" &&
    `
        background: ${p.theme.theme.botsBackground};
        color: ${p.theme.theme.botsForegroundColor};
    `}
    ${(p) =>
    p.type === "themes" &&
    `
        background: ${p.theme.theme.themesBackground};
        color: ${p.theme.theme.themesForegroundColor};
    `}

    ${(p) =>
    !p.active &&
    `
        filter: grayscale(100%);
        opacity: 0.8;

        &:hover {
            filter: grayscale(0%);
            opacity: 1;
        }
    `}

    @media (max-width: 500px) {
        box-shadow: none;
        font-size: 1rem;

        ${(p) =>
    p.type === "servers" &&
    `
            background: ${p.theme.theme.serversBackgroundColor};
            color: ${p.theme.theme.serversForegroundColor};
        `}
        ${(p) =>
    p.type === "bots" &&
    `
            background: ${p.theme.theme.botsBackgroundColor};
            color: ${p.theme.theme.botsForegroundColor};
        `}
        ${(p) =>
    p.type === "themes" &&
    `
            background: ${p.theme.theme.themesBackgroundColor};
            color: ${p.theme.theme.themesForegroundColor};
        `}
    }
`

const Icon = styled.img`
    width: 1.2rem;
    margin-right: 0.5rem;
    filter: invert(1);
`

export const Supertab = ({ type, active }: SupertabProps) => {
    return (
        <SupertabRoot type={type} active={active}>
            {type === "servers" && (
                <>
                    <Icon src={Compass.src} alt="Compass icon" />
                    Servers
                </>
            )}
            {type === "bots" && (
                <>
                    <Icon src={Robot.src} alt="Robot icon" />
                    Bots
                </>
            )}
            {type === "themes" && (
                <>
                    <Icon src={Palette.src} alt="Palette icon" />
                    Themes
                </>
            )}
        </SupertabRoot>
    )
}
