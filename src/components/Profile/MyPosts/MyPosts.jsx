import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const PostForm = props => {
    return (
        <form className={style.form} onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name='postText'/>
            <button>add post</button>
        </form>
    )
};

const PostReduxForm = reduxForm({form: 'post_form'})(PostForm);

const MyPosts = (props) => {
    let posts = props.posts.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>);

    const onSubmit = formData => {
        props.addPost(formData.postText);
    };

    return (
        <div>
            <PostReduxForm onSubmit={onSubmit}/>
            <div className={style.posts}>
                {posts}
            </div>
        </div>

    )
};

export default MyPosts