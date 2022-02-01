import useDocumentTitle from "hooks/useDocumentTitle";
import React from "react";

const News = () => {
    useDocumentTitle("News page")

    return (
        <h1>News</h1>
    )
}

export default News;