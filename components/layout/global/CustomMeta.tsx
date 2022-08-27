import Head from "next/head";

interface MetaObject {
    title: string;
    url: string;
    thumbnailAt: string;
    description: string;
}

interface CustomMetaProps {
    meta: MetaObject;
}

const CustomMeta = ({ meta }: CustomMetaProps) => (
    <Head>
        <meta property="og:title" content={meta.title} key="title" />
        <meta property="og:url" content={meta.url} key="url" />
        <meta property="og:image" content={meta.thumbnailAt} key="thumbnail" />
        <meta
            property="og:description"
            content={meta.description}
            key="description"
        />
        <meta property="twitter:title" content={meta.title} key="tw-title" />
        <meta
            property="twitter:image"
            content={meta.thumbnailAt}
            key="tw-thumbnail"
        />
        <meta
            property="twitter:image:alt"
            content={meta.title}
            key="tw-thumbnail-alt"
        />
        <meta
            property="twitter:description"
            content={meta.description}
            key="tw-description"
        />
    </Head>
);

export default CustomMeta;
