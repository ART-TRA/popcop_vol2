import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";
import connect from "react-redux/lib/connect/connect";

// const MyPostsContainer = (props) => { //в props попадает весь store
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 let state = store.getState().profilePage; //из store вытаскиваем state для profilePage
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };
//                 let onChangeText = (text) => {
//                     store.dispatch(updateNewPostTextActionCreator(text));
//                 };
//                 return <MyPosts addPost={addPost}
//                                 onChangeText={onChangeText}
//                                 posts={state.posts}
//                                 newPostText={state.newPostText}/>
//             }
//             }
//         </StoreContext.Consumer>)
// };

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