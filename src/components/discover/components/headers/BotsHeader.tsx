import React from "react"
import {
    HeaderBase,
    HeaderHeading,
    HeaderMarketingText,
} from "./SharedHeaderStyles.tsx"
import Background from "../../../../assets/revoltbg-bots.png"

export const BotsHeader = () => {
    return (
        <HeaderBase bgSrc={Background.src}>
            <HeaderHeading>
                Bots that simply<br />
                make sense.
            </HeaderHeading>
            <HeaderMarketingText>
                Robo-friends for your server, your group chat, and your heart.
            </HeaderMarketingText>
        </HeaderBase>
    )
}
