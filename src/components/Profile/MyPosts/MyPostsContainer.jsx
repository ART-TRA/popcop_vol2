import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => { //в props попадает весь store
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().profilePage; //из store вытаскиваем state для profilePage
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };
                let onChangeText = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                };
                return <MyPosts addPost={addPost}
                                onChangeText={onChangeText}
                                posts={state.posts}
                                newPostText={state.newPostText}/>
            }
            }
        </StoreContext.Consumer>)
};

export default MyPostsContainer