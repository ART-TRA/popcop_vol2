import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props)=>{
    let posts = props.data_posts.map(p => <Post message={p.message} likes={p.likes}/>)
    return(
        <div className={style.posts}>
            {posts}
        </div>
    )
}

export default MyPosts