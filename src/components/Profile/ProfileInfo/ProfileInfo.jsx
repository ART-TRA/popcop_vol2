import React from "react";
import style from './ProfileInfo.module.css'

const ProfileInfo=()=>{
    return(
        <div className={style.profile_info}>
            <img className={style.profile_img} src="https://i.playground.ru/p/SCfJ19mum0SsgDhAN1jALA.jpeg" alt=""/>
            <div className={style.profile_desc}>

            </div>
        </div>
    )
}

export default ProfileInfo