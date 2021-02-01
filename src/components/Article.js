import React from "react";



function Article({title, date = "January 1, 1970", preview, minutes}){
    // rounded5({minutes})
    // const rounded5 = () => {
    //     Math.ceil(x/5)*5;
    // }

    // const cups = () => {
    //     if (rounded5 === 5) {return "☕️"}
    //     else if (rounded5 === 10) {return "☕️☕️"}
    //     else if (rounded5 === 15) {return "☕️☕️☕️"}
    //     else if (rounded5 === 20) {return "☕️☕️☕️☕️"}
    //     else if (rounded5 === 25) {return "☕️☕️☕️☕️☕️"}
    // }
    return(<article>
        <h3>{title}</h3>
        <small>
            {date} - {minutes} min read
        </small>
        <p>{preview}</p>
    </article>
    )
}


export default Article;