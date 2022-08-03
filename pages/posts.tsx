import PagePadding from "../components/layout/global/PagePadding";
import PageHeading from "../components/layout/global/PageHeading";
import PageTitle from "../components/layout/global/PageTitle";
import { GetStaticProps } from "next";
import { getAllPosts, Post } from "../lib/posts";
import PostGrid from "../components/posts/PostList";

interface PostsProps {
    posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
    return (
        <PagePadding>
            <PageTitle>Blog - Revolt</PageTitle>
            <PageHeading>Blog</PageHeading>
            <PostGrid posts={posts} />
        </PagePadding>
    );
}

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
    return {
        props: {
            posts: getAllPosts(),
        },
    };
};
