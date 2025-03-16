import React from "react"
import {
    HeaderBase,
    HeaderHeading,
    HeaderMarketingText,
} from "./SharedHeaderStyles.tsx"
import Background from "../../../../assets/revoltbg-themes.png"

export const ThemesHeader = () => {
    return (
        <HeaderBase bgSrc={Background.src}>
            <HeaderHeading>
                A new look<br />
                for a new day.
            </HeaderHeading>
            <HeaderMarketingText>
                Themes that make Revolt feel like it was made just for you.
            </HeaderMarketingText>
        </HeaderBase>
    )
}
