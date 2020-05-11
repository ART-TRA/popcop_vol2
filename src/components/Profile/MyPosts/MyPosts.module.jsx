import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = ()=>{
    return(
        <div className={style.posts}>
            <Post name="Seydoux"/>
            <Post name="Reedus"/>
            <Post name="Mikelson"/>
        </div>
    )
}

export default MyPosts