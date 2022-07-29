import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            foreground: string;
            foregroundGrey: string;
            background: string;
            backgroundLighter: string;
            primary: string;
            disabledGrey: string;
        };
        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        easing: string;
    }
}
