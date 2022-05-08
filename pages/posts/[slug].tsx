import Head from 'next/head';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import styles from '../../styles/Post.module.scss';
import { Markdown } from '../../components/Markdown';
import { getAllPostSlugs, getPostBySlug, Post as PostType } from '../../lib/posts';
import { renderMarkdown } from '../../lib/markdown';

import Giscus from '@giscus/react';

export default function Post({ post }: { post: PostType }) {
    const date = new Date(post.date).toLocaleDateString("en-gb", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    return (
        <div>
            <Head>
                <title>{post.title} - Revolt</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=0.9, user-scalable=0" />
                <meta property="og:site_name" content="Revolt" />
                <meta property="og:url" content={'https://revolt.chat/posts/' + post.slug} />
                <meta property="og:title" content={post.title} />
                <meta property="og:type" content="article" />
                <meta property="og:description" content={post.description} />
                <meta property="og:article:published_time" content={post.date} />
                <meta property="og:article:author" content={post.author} />
                { post.coverImage &&
                    <>
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:image" content={'https://revolt.chat' + post.coverImage} />
                    </>
                }
            </Head>
            <main>
                <Navbar />
                <div className={styles.content}>
                    <h3 className={styles.metadata}>{date} | {post.readingTime}-minute read | Author: {post.author}</h3>
                    <h1 className={styles.title}>{post.title}</h1>
                    {post.coverImage && <img
                        src={post.coverImage}
                        className={styles.image}
                    />}
                    <Markdown rendered={post.content} />
                    { post.giscus && <div className={styles.giscus}>
                        <Giscus
                            id="comments"
                            repo="revoltchat/revolt"
                            repoId="MDEwOlJlcG9zaXRvcnkzOTM0MDIwNTY="
                            category="Announcements"
                            categoryId="DIC_kwDOF3LWyM4B-k-m"
                            mapping="title"
                            reactionsEnabled="1"
                            emitMetadata="0"
                            inputPosition="bottom"
                            theme="https://revolt.chat/giscus.css"
                            lang="en"
                            loading="lazy"
                        />
                    </div> }
                </div>
                <Footer />
            </main>
        </div>
    );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)
    const rendered = await renderMarkdown(post.content)
    return { props: { post: { ...post, content: rendered } } }
}

export function getStaticPaths() {
    const slugs = getAllPostSlugs();

    return {
        paths: slugs.map(slug => {
            return {
                params: {
                    slug: slug.replace(/.md$/, ''),
                },
            }
        }),
        fallback: false,
    };
}
