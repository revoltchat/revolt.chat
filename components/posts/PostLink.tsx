import Link from "next/link";
import styled from "styled-components";
import { Post } from "../../lib/posts";
import { formatDate } from "./PostMetadata";

const PostContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${(p) => p.theme.colors.backgroundLighter};
    border-radius: 0 0 8px 8px;
    padding: 1rem;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        border-radius: 0 8px 8px 0;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.xl}) {
        padding: 1.25rem;
    }
`;

const PostAnchor = styled.a`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        flex-direction: row;
    }
`;

const PostImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
        width: 360px;
    }
`;

const PostTitle = styled.h2`
    color: ${(p) => p.theme.colors.primary};
`;

const PostData = styled.span`
    color: ${(p) => p.theme.colors.foregroundGrey};
`;

const PostDescription = styled.div`
    margin-top: 1rem;
`;

interface PostLinkProps {
    post: Post;
}

const PostLink = ({ post }: PostLinkProps) => {
    return (
        <Link href={`/posts/${post.slug}`} passHref>
            <PostAnchor>
                <PostImage src={post.coverImage ?? "/post-placeholder.png"} />
                <PostContainer>
                    <PostTitle>{post.title}</PostTitle>
                    <PostData>
                        {formatDate(post.date)} &middot; {post.author} &middot;{" "}
                        {post.readingTime} min to read
                    </PostData>
                    <PostDescription>{post.description}</PostDescription>
                </PostContainer>
            </PostAnchor>
        </Link>
    );
};

export default PostLink;
