import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props)=>{
    let posts = props.data_posts.map(p => <Post message={p.message} likes={p.likes}/>)

    let addPost = ()=>{
        props.dispatch({type: 'ADD-POST'});
    };

    let newEl = React.createRef(); //создание ссылки на элемент
    let onChangeText=()=>{ //ф-ция вызывается всякий раз как меняются данные в поле ввода
        let text = newEl.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    };

    return(
        <div>
            <textarea ref={newEl} onChange={onChangeText} value={props.newPostText}/> {/*присвоение ссылки элементу*/}
            <button onClick={addPost}>add post</button> {/*обработчик нажатия на кнопку и передача коллбэка*/}
            <div className={style.posts}>
                {posts}
            </div>
        </div>

    )
};

export default MyPosts