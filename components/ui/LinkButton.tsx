import Link from "next/link";
import Button, { ButtonProps } from "./Button";

type LinkButtonProps = ButtonProps & { href: string };

const LinkButton = ({ href, ...props }: LinkButtonProps) => {
    return (
        <Link href={href} passHref>
            <a>
                <Button {...props}>{props.children}</Button>
            </a>
        </Link>
    );
};

export default LinkButton;
