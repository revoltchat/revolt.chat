import React from "react"
import {
    HeaderBase,
    HeaderHeading,
    HeaderMarketingText,
} from "./SharedHeaderStyles.tsx"
import { useConfig } from "../../lib/config.ts"

export const HomeHeader = () => {
    const config = useConfig()

    return (
        <HeaderBase>
            <HeaderHeading>
                Make Revolt<br />
                into <span>your</span> Revolt.
            </HeaderHeading>
            <HeaderMarketingText>
                {config.use.servers && "Servers to hang out. "}
                {config.use.bots && "Bots to make your life easier. "}
                {config.use.themes && "Themes that fit your style. "}
                We've got you covered.
            </HeaderMarketingText>
        </HeaderBase>
    )
}
