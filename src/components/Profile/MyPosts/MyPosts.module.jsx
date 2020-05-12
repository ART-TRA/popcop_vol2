import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const postsDada = [
    {message: "Seydoux", likes: 7},
    {message: "Reedus", likes: 4},
    {message: "Mikkelson", likes: 6},
]

const MyPosts = ()=>{
    return(
        <div className={style.posts}>
            <Post name={postsDada[0].message} likes={postsDada[0].likes}/>
            <Post name={postsDada[1].message} likes={postsDada[1].likes}/>
            <Post name={postsDada[2].message} likes={postsDada[2].likes}/>
        </div>
    )
}

export default MyPosts