import Link from "next/link";
import styled from "styled-components";
import RevoltLogo from "../../../assets/logo/revolt-logo.svg";

const NavbarFloat = styled.nav`
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    padding-top: 3rem;
`;

const NavbarFlex = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90vw;
    margin: auto;
`;

const RevoltLogoContainer = styled.img`
    height: 25px;
`;

const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

const NavLink = styled.a`
    font-weight: 600;
`;

const Navbar = () => {
    return (
        <NavbarFloat>
            <NavbarFlex>
                <Link href="/" passHref>
                    <a>
                        <RevoltLogoContainer src={RevoltLogo.src} />
                    </a>
                </Link>
                <LinkContainer>
                    <Link href="https://support.revolt.chat" passHref>
                        <NavLink>Support</NavLink>
                    </Link>
                    <Link href="/posts" passHref>
                        <NavLink>Blog</NavLink>
                    </Link>
                    <Link href="https://github.com/revoltchat" passHref>
                        <NavLink>Tracker</NavLink>
                    </Link>
                </LinkContainer>
            </NavbarFlex>
        </NavbarFloat>
    );
};

export default Navbar;
