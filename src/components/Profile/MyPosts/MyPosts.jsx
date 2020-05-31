import React, {memo} from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(10);

const PostForm = props => {
    return (
        <form className={style.form} onSubmit={props.handleSubmit}>
            <Field component={Textarea} name='postText' validate={[required, maxLength]} placeholder='post text'/>
            <button>add post</button>
        </form>
    )
};

const PostReduxForm = reduxForm({form: 'post_form'})(PostForm);

//у функциональной компоненты аналог метода shouldComponentUpdate - React.memo
//не вызывает перерисовку компоненты если она не изменилась
const MyPosts = memo((props) => {

    //если используется классовая компонента, у неё есть метод shouldComponentUpdate
    // //метод спрашивает у компоненты нужно ли ей отрисовываться
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     //отрисовка произойдёт только тогда, когда изменятся props или state
    //     return nextProps !== this.props || nextState !== this.state;
    // }
    let posts = props.posts.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>);
    //чтобы сделать вывод постов обратным НУЖНО ВЕРНУТЬ КОПИЮ МАССИВА PROPS и изменять её
    //let posts = [...props.posts].reverse().map(p => <Post key={p.id} message={p.message} likes={p.likes}/>);

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
});

export default MyPosts