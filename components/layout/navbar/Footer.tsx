import {
    Github,
    Mastodon,
    Reddit,
    Twitter,
} from "@styled-icons/boxicons-logos";
import Link from "next/link";
import styled from "styled-components";
import RevoltLogo from "../../../assets/logo/revolt-logo.svg";

const FooterContainer = styled.nav`
    width: 100vw;
    padding: 3rem 0;
`;

const FooterFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: space-between;
    width: 90vw;
    margin: auto;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        flex-direction: row;
    }
`;

const RevoltLogoContainer = styled.img`
    height: 25px;
`;

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const LinkContainerHeader = styled.h4`
    margin: 0;
    padding: 0;
    color: ${(p) => p.theme.colors.primary};
    font-weight: 700;
`;

const Links = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
        gap: 4rem;
        flex-direction: row;
    }
`;

const BrandBox = styled.div`
    align-items: center;
    display: flex;
    gap: 1rem;
    flex-direction: column;
`;

const BrandJustify = styled.div`
    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        margin-right: auto;
    }
`;

const Socials = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    gap: 1rem;
`;

const NavLink = styled.span`
    font-weight: 400;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterFlex>
                <BrandBox>
                    <BrandJustify>
                        <Link href="/">
                            <RevoltLogoContainer src={RevoltLogo.src} />
                        </Link>
                    </BrandJustify>
                    <Socials>
                        <Link href="https://github.com/revoltchat">
                            <Github size={30} />
                        </Link>
                        <Link
                            href="https://mastodon.social/@revoltchat"
                            rel="me"
                        >
                            <Mastodon size={30} />
                        </Link>
                        <Link href="https://twitter.com/revoltchat">
                            <Twitter size={30} />
                        </Link>
                        <Link href="https://reddit.com/r/revoltchat">
                            <Reddit size={30} />
                        </Link>
                    </Socials>
                </BrandBox>
                <Links>
                    <LinkContainer>
                        <LinkContainerHeader>App</LinkContainerHeader>
                        <Link href="/download">
                            <NavLink>Download</NavLink>
                        </Link>
                        <Link href="https://github.com/orgs/revoltchat/projects/3/views/1">
                            <NavLink>Project Tracker</NavLink>
                        </Link>
                        <Link href="https://support.revolt.chat">
                            <NavLink>Support</NavLink>
                        </Link>
                    </LinkContainer>
                    <LinkContainer>
                        <LinkContainerHeader>Developers</LinkContainerHeader>
                        <Link href="https://developers.revolt.chat">
                            <NavLink>Documentation</NavLink>
                        </Link>
                        <Link href="https://weblate.insrt.uk/engage/revolt/?utm_source=widget">
                            <NavLink>Help Translate</NavLink>
                        </Link>
                    </LinkContainer>
                    <LinkContainer>
                        <LinkContainerHeader>Team</LinkContainerHeader>
                        <Link href="/about">
                            <NavLink>About</NavLink>
                        </Link>
                        <Link href="/posts">
                            <NavLink>Blog</NavLink>
                        </Link>
                        <Link href="https://support.revolt.chat/contact">
                            <NavLink>Contact</NavLink>
                        </Link>
                    </LinkContainer>
                    <LinkContainer>
                        <LinkContainerHeader>Legal</LinkContainerHeader>
                        <Link href="/aup">
                            <NavLink>Community Guidelines</NavLink>
                        </Link>
                        <Link href="/terms">
                            <NavLink>Terms of Service</NavLink>
                        </Link>
                        <Link href="/privacy">
                            <NavLink>Privacy Policy</NavLink>
                        </Link>
                    </LinkContainer>
                    <LinkContainer>
                        <LinkContainerHeader>Subscribe</LinkContainerHeader>
                        <Link href="/feed/rss">
                            <NavLink>RSS</NavLink>
                        </Link>
                        <Link href="/feed/atom">
                            <NavLink>Atom</NavLink>
                        </Link>
                        <Link href="/feed/json">
                            <NavLink>JSON</NavLink>
                        </Link>
                    </LinkContainer>
                </Links>
            </FooterFlex>
        </FooterContainer>
    );
};

export default Footer;
