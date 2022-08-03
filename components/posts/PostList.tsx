import styled from "styled-components";
import { Post } from "../../lib/posts";
import PostLink from "./PostLink";

const Grid = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
`;

interface PostListProps {
    posts: Post[];
}

const PostGrid = ({ posts }: PostListProps) => {
    return (
        <Grid>
            {posts.map((post) => (
                <PostLink post={post} />
            ))}
        </Grid>
    );
};

export default PostGrid;
