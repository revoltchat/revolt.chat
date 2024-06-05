import Link from "next/link";
import Button, { ButtonProps } from "./Button";

type LinkButtonProps = ButtonProps & { href: string };

const LinkButton = ({ href, ...props }: LinkButtonProps) => {
    return (
        <Link href={href} legacyBehavior>
            <Button {...props}>{props.children}</Button>
        </Link>
    );
};

export default LinkButton;
