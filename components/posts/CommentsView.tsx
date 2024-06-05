import Script from "next/script";
import { useEffect } from "react";
import styled from "styled-components";

const GiscusView = styled.div`
    padding-top: 3rem;
`;

const CommentsView = () => {
    useEffect(() => {
        const HolyMotherOfHack = setInterval(() => {
            const el = document.querySelector(".giscus");
            if (el) {
                clearInterval(HolyMotherOfHack);
                document.getElementById("giscusTarget").appendChild(el);
            }
        });
    }, []);

    return (
        <GiscusView id="giscusTarget">
            <Script
                src="https://giscus.app/client.js"
                data-repo="revoltchat/revolt"
                data-repo-id="MDEwOlJlcG9zaXRvcnkzOTM0MDIwNTY="
                data-category="Announcements"
                data-category-id="DIC_kwDOF3LWyM4B-k-m"
                data-mapping="title"
                data-strict="0"
                data-reactions-enabled="1"
                data-emit-metadata="0"
                data-input-position="bottom"
                data-theme="https://revolt.chat/giscus.css"
                data-lang="en"
                data-loading="lazy"
                crossOrigin="anonymous"
                async
            />
        </GiscusView>
    );
};

export default CommentsView;
