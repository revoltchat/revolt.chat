import React from "react"
import {
    HeaderBase,
    HeaderHeading,
    HeaderMarketingText,
} from "./SharedHeaderStyles.tsx"
import Background from "../../../../assets/revoltbg-servers.png"

export const ServersHeader = () => {
    return (
        <HeaderBase bgSrc={Background.src}>
            <HeaderHeading>
                Hanging out is<br />
                better together.
            </HeaderHeading>
            <HeaderMarketingText>
                Find new servers to join, new friends to make, and new
                experiences to have.
            </HeaderMarketingText>
        </HeaderBase>
    )
}
