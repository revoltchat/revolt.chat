import Head from 'next/head';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import styles from '../../styles/Post.module.scss';
import { Markdown } from '../../components/Markdown';
import { getAllPostSlugs, getPostBySlug, Post as PostType } from '../../lib/posts';

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
            </Head>
            <main>
                <Navbar />
                <div className={styles.content}>
                    <h3 className={styles.metadata}>{date} | {post.readingTime}-minute read | Author: {post.author}</h3>
                    <h1 className={styles.title}>{post.title}</h1>
                    <h3>{post.description}</h3>
                    {post.coverImage && <img
                        src={post.coverImage}
                        className={styles.image}
                    />}
                    <Markdown content={post.content} />
                </div>
                <Footer />
            </main>
        </div>
    );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)
    return { props: { post } }
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
