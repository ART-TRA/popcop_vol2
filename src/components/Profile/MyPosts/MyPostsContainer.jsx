import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";

const MyPostsContainer = (props)=>{ //в props попадает весь store
    debugger
    let state = props.store.getState().profilePage; //из store вытаскиваем state для profilePage
    let addPost = ()=>{
        props.store.dispatch(addPostActionCreator());
    };
    let onChangeText = (text)=>{
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    return <MyPosts addPost={addPost}
                    onChangeText={onChangeText}
                    posts={state.posts}
                    newPostText={state.newPostText}/>
};

export default MyPostsContainer