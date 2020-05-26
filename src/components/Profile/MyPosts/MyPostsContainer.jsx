import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";
import connect from "react-redux/lib/connect/connect";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: ()=>{
            dispatch(addPostActionCreator())
        },
        onChangeText: (text)=>{
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer