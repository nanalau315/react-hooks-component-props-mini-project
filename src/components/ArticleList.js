import React from "react";
import Article from "./Article"

function ArticleList({posts}){
    const articleElement = posts.map((p) => 
    <Article key={p.id} title={p.title} date={p.date} preview={p.preview} minutes={p.minutes}/>
    )
    return(
        <main>{articleElement}</main>
    )
}
export default ArticleList;