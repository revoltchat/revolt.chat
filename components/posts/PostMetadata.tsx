import styled from "styled-components";
import { Post } from "../../lib/posts";

export const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-gb", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

const Metadata = styled.div`
    color: ${(p) => p.theme.colors.foregroundGrey};
    margin-bottom: 1rem;
`;

const Heading = styled.h1`
    font-weight: 700;
    font-size: 2.5rem;
`;

const CoverImage = styled.img`
    width: 100%;
    margin-bottom: 0.4rem;
    margin-top: 1rem;
`;

interface PostMetadataProps {
    post: Post;
}

const PostMetadata = ({ post }: PostMetadataProps) => {
    return (
        <>
            <Heading>{post.title}</Heading>
            <Metadata>
                {formatDate(post.date)} &middot; {post.author} &middot;{" "}
                {post.readingTime} min to read
            </Metadata>
            {post.coverImage && <CoverImage src={post.coverImage} />}
        </>
    );
};

export default PostMetadata;
