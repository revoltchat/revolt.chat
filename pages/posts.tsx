import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import styles from '../styles/PostList.module.scss';
import { getAllPosts, Post as PostType } from '../lib/posts';
import Link from 'next/link';

export default function Post({ posts }: { posts: PostType[] }) {
    const friendlyDate = (date: string) => (
        new Date(date).toLocaleDateString("en-gb", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        })
    )

    return (
        <div>
            <Head>
                <title>Blog - Revolt</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=0.9, user-scalable=0" />
            </Head>
            <main>
                <Navbar />
                <div className={styles.container}>
                    <h1 className={styles.pageTitle}>Posts</h1>
                    <div className={styles.posts}>
                        {posts.map(post => (
                            <Link href={`/posts/${post.slug}`} key={post.slug}>
                                <a>
                                    <div className={styles.post}>
                                        <img
                                            src={post.coverImage ?? "/post-placeholder.png"}
                                            className={styles.image}
                                        />
                                        <div className={styles.metadata}>
                                            <h1 className={styles.title}>{post.title}</h1>
                                            <h3>{friendlyDate(post.date)} | {post.readingTime}-minute read | Author: {post.author}</h3>
                                            <h3>{post.description}</h3>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const posts = getAllPosts()
    return { props: { posts } }
}
