import IndexHero from "../components/layout/hero/IndexHero/IndexHero";
import styled from "styled-components";
import HeroFadeout from "../components/layout/hero/HeroFadeout";
import Feature from "../components/index/Feature";
import PagePadding from "../components/layout/global/PagePadding";
import PreFooterCTA from "../components/layout/hero/IndexHero/PreFooterCTA";

import Servers from "../assets/illustrations/Servers.svg";
import Roles from "../assets/illustrations/Roles.svg";
import Private from "../assets/illustrations/Private.svg";
import Colors from "../assets/illustrations/Colors.svg";
import { GetStaticProps } from "next";

const HeroContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundLighter};
`;

interface HomeProps {
    fadeoutUrl: string;
}

export default function Home({ fadeoutUrl }: HomeProps) {
    return (
        <>
            <HeroContainer>
                <IndexHero />
                <HeroFadeout staticFadeoutUrl={fadeoutUrl} />
            </HeroContainer>
            <PagePadding>
                <Feature
                    heading="Create a space only for you and your friends."
                    image={Servers.src}
                >
                    Revolt lets you create a private space for you and your
                    friends to chat, without any of the distractions of other
                    chat apps. You can customize your server however you want,
                    and even invite any other friends to join you.
                </Feature>
                <Feature
                    heading="Built even for the most dedicated communities."
                    image={Roles.src}
                    reverse
                >
                    Revolt is perfect for communities looking to chat with their
                    members. With role-based access control and in-depth
                    customization, you can get started from creation to invite
                    in minutes.
                </Feature>
                <Feature
                    heading="Talk without anyone else listening in."
                    image={Private.src}
                >
                    Revolt will not sell your data or leak it to advertisers.
                    Our code is open source and can be audited by anyone
                    willing. Based in Europe and bound to the GDPR, we take your
                    privacy very seriously. And with end-to-end encryption
                    coming to DMs and group chats soon, you can be absolutely
                    sure of it.
                </Feature>
                <Feature
                    heading="Make it yours in minutes."
                    image={Colors.src}
                    reverse
                >
                    Revolt's open architecture makes it easier than ever to
                    build custom bots and clients for anything your heart
                    desires. You can even make your own Revolt app if you want
                    to. And with every single color customizable, you don't need
                    to know how to program to make it feel like you want to.
                </Feature>
            </PagePadding>
            <PreFooterCTA />
        </>
    );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    // See components/layout/hero/HeroFadeout for an explanation of what we're doing here
    const fs = await import("fs/promises");
    const { join } = await import("path");

    const fadeoutPath = join(
        process.cwd(),
        "assets",
        "illustrations",
        "Fadeout.svg"
    );
    const fadeoutContents = await fs.readFile(fadeoutPath);
    const fadeoutUrl = fadeoutContents.toString("base64");

    return {
        props: {
            fadeoutUrl: `data:image/svg+xml;base64,${fadeoutUrl}`,
        },
    };
};
