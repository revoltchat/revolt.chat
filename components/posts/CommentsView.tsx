import Giscus from "@giscus/react";
import styled from "styled-components";

const GiscusView = styled.div`
    padding-top: 3rem;
`;

const CommentsView = () => {
    return (
        <GiscusView>
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
        </GiscusView>
    );
};

export default CommentsView;
