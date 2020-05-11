import React from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts.module";

const Profile = ()=>{
    return(
        <div>
            <img className={style.main_img} src="https://i.playground.ru/p/SCfJ19mum0SsgDhAN1jALA.jpeg" alt=""/>
            <MyPosts/>
        </div>
    )
}

export default Profile