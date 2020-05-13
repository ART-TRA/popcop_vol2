import React from "react";
import style from './ProfileInfo.module.css'

const ProfileInfo=()=>{
    let newEl = React.createRef(); //создание ссылки на элемент
    let addPost = ()=>{
        let text = newEl.current.value;
        alert(text);
    }
    return(
        <div className={style.profile_info}>
            <img className={style.profile_img} src="https://i.playground.ru/p/SCfJ19mum0SsgDhAN1jALA.jpeg" alt=""/>
            <div className={style.profile_desc}>

                <textarea ref={newEl} placeholder='add post' ></textarea> {/*присвоение ссылки элементу*/}
                <button onClick={addPost}>add post</button> {/*обработчик нажатия на кнопку и передача коллбэка*/}
            </div>
        </div>
    )
}

export default ProfileInfo