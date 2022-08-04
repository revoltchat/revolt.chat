import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../components/global-styles";
import Navbar from "../components/layout/navbar/Navbar";
import GlobalMeta from "../components/layout/global/GlobalMeta";
import "../assets/styles/inter.scss";
import Footer from "../components/layout/navbar/Footer";

const revolt22theme: DefaultTheme = {
    colors: {
        foreground: "#ffffff",
        foregroundGrey: "#c2c2c2",
        background: "#101823",
        backgroundLighter: "#172333",
        primary: "#ff4654",
        disabledGrey: "#838383",
    },
    breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
    },
    easing: "cubic-bezier(0.65, 0, 0.35, 1)",
};

const CURRENT_THEME = revolt22theme;

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalMeta />
            <ThemeProvider theme={CURRENT_THEME}>
                <GlobalStyle />
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </>
    );
}
