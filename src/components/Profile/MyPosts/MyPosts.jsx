import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";




const MyPosts = (props)=>{
    let posts = props.posts.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>);

    let addPost = ()=>{
        props.addPost();
    };

    let onChangeText=(e)=>{
        let text = e.target.value;
        props.onChangeText(text);

    };

    return(
        <div>
            <textarea onChange={onChangeText} value={props.newPostText}/>
            <button onClick={addPost}>add post</button>
            <div className={style.posts}>
                {posts}
            </div>
        </div>

    )
};

export default MyPosts