import Script from "next/script";
import { useEffect, useLayoutEffect } from "react";
import styled from "styled-components";

const GiscusView = styled.div`
    padding-top: 3rem;
`;

const CommentsView = () => {
    useLayoutEffect(() => {
        const script = document.createElement("script");
        script.src = "https://giscus.app/client.js";
        script.setAttribute("data-repo", "revoltchat/revolt");
        script.setAttribute("data-repo-id", "MDEwOlJlcG9zaXRvcnkzOTM0MDIwNTY=");
        script.setAttribute("data-category", "Announcements");
        script.setAttribute("data-category-id", "DIC_kwDOF3LWyM4B-k-m");
        script.setAttribute("data-mapping", "title");
        script.setAttribute("data-strict", "0");
        script.setAttribute("data-reactions-enabled", "1");
        script.setAttribute("data-emit-metadata", "0");
        script.setAttribute("data-input-position", "bottom");
        script.setAttribute("data-theme", "https://revolt.chat/giscus.css");
        script.setAttribute("data-lang", "en");
        script.setAttribute("data-loading", "lazy");
        script.crossOrigin = "anonymous";
        script.async = true;
        document.getElementById("giscusTarget").appendChild(script);
    }, []);

    return <GiscusView id="giscusTarget" />;
};

export default CommentsView;
