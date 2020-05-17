import React from "react";
import style from './NewsItem.module.css'

const NewsItem = (props)=>{
    return(
        <div>
            {props.text}
        </div>
    )
};

export default NewsItem