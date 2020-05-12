import React from "react";
import style from './Post.module.css'

const Post = (props)=>{
    return (
        <div className={style.post}>
            <div className={style.person_img}></div>
            {/*<img className={style.person_img} src="https://img5.goodfon.ru/wallpaper/nbig/8/c8/lea-seydoux-death-stranding-kojima-productions-hideo-kojima.jpg" alt="" />*/}
            {/*обязательно в фигурн скобках обращение к параметрам, которые явл объектами со св-вами*/}
            {props.message}
            <div> likes {props.likes}</div>
        </div>
    )
}

export default Post