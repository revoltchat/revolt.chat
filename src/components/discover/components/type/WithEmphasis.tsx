import React, { type ReactNode } from "react"
import { styled } from "styled-components"

const Emphasis = styled.em`
    color: ${(p) => p.theme.theme.primaryColor};
    filter: drop-shadow(0 0.4rem 0.4rem rgb(0 0 0 / 0.2));
    font-style: normal;
`

const escapeRegExp = (string: string): string => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

const parseCustomSyntax = (
    text: string,
    startDelimiter: string,
    endDelimiter: string,
): (ReactNode | string)[] => {
    const escapedStartDelimiter = escapeRegExp(startDelimiter)
    const escapedEndDelimiter = escapeRegExp(endDelimiter)
    const regex = new RegExp(
        `${escapedStartDelimiter}([^]+?)${escapedEndDelimiter}`,
        "g",
    )

    const result: (ReactNode | string)[] = []
    let lastIndex = 0

    text.replace(regex, (match, content, offset) => {
        if (offset > lastIndex) {
            result.push(text.slice(lastIndex, offset))
        }

        result.push(<Emphasis key={offset}>{content}</Emphasis>)

        lastIndex = offset + match.length
        return match
    })

    if (lastIndex < text.length) {
        result.push(text.slice(lastIndex))
    }

    return result
}

interface WithEmphasisProps {
    text: string
    startDelimiter?: string
    endDelimiter?: string
}

const WithEmphasis = ({
    text,
    startDelimiter = "##",
    endDelimiter = "##",
}: WithEmphasisProps) => {
    return <>{parseCustomSyntax(text, startDelimiter, endDelimiter)}</>
}

export default WithEmphasis
