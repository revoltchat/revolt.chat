import Head from "next/head";

interface PageTitleProps {
    children: React.ReactNode;
}

const PageTitle = ({ children }: PageTitleProps) => {
    return (
        <Head>
            <title>{children}</title>
        </Head>
    );
};

export default PageTitle;
