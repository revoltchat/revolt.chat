import styled, {
    DefaultTheme,
    ThemedStyledProps,
    useTheme,
} from "styled-components";

type ButtonVariant = "primary" | "disabled" | "regular" | "regular-invert";

type ButtonStylesProps = ThemedStyledProps<HTMLButtonElement, DefaultTheme> & {
    foreground: string;
    background: string;
};

//     - It looks like styled-components has certain typing issues
//       regarding themed components w/ props right now, so we have
//       to cast to `any` for the time being
// FIXME Do not cast to `any` here
const ButtonStyles: any = styled.button`
    padding: 1rem;
    font-weight: 500;
    font-size: 1em;
    font-family: "Inter", sans-serif;
    border: none;
    cursor: pointer;

    background-color: ${(p: ButtonStylesProps) => p.background};
    color: ${(p: ButtonStylesProps) => p.foreground};
`;

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
};

const Button = ({ variant = "regular", ...props }: ButtonProps) => {
    const theme = useTheme();

    const getBackgroundColor = () => {
        switch (variant) {
            case "primary":
                return theme.colors.primary;
            case "disabled":
                return theme.colors.disabledGrey;
            case "regular-invert":
                return theme.colors.background;
            default:
                return theme.colors.backgroundLighter;
        }
    };

    const getForegroundColor = () => {
        switch (variant) {
            case "primary":
                return theme.colors.foreground;
            case "disabled":
                return theme.colors.foreground;
            default:
                return theme.colors.foreground;
        }
    };

    return (
        <ButtonStyles
            background={getBackgroundColor()}
            foreground={getForegroundColor()}
            {...props}
        >
            {props.children}
        </ButtonStyles>
    );
};

export default Button;
