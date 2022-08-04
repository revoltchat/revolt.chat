import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        color: ${({ theme }) => theme.colors.foreground};
        padding: 0;
        margin: 0;
        font-family: "Inter", sans-serif;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.colors.background};
        min-height: 100vh;
    }

    h1, h2, h3, h4, h5, h6 {
        padding: 0;
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;

        :active {
            opacity: 0.9;
        }
    }

    code {
        font-size: 1rem;
    }

    * {
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
        width: 3px;
        height: 3px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${(p) => p.theme.colors.primary};
    }
`;

export default GlobalStyle;
