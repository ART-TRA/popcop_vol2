import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

// const postsDada = [
//     {message: "Seydoux", likes: 7},
//     {message: "Reedus", likes: 4},
//     {message: "Mikkelson", likes: 6},
// ]

// let posts = postsDada.map(p => <Post message={p.message} likes={p.likes}/>)

const MyPosts = (props)=>{
    console.log(props)
    let posts = props.data_posts.map(p => <Post message={p.message} likes={p.likes}/>)
    return(
        <div className={style.posts}>
            {posts}
        </div>
    )
}

export default MyPosts