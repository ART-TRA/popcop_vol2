import React from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo=(props)=>{
    if(!props.profile){
        return Preloader
    }
    return(
        <div className={style.profile_info}>
            {/*<img className={style.profile_img} src="https://i.playground.ru/p/SCfJ19mum0SsgDhAN1jALA.jpeg"/>*/}
            <img className={style.profile_img} src={props.profile.photos.large !==null
                ? props.profile.photos.large
                : "https://i.playground.ru/p/SCfJ19mum0SsgDhAN1jALA.jpeg"}/>
            <div className={style.profile_desc}>
                <div>name: {props.profile.fullName}</div>
            </div>
        </div>
    )
};

export default ProfileInfo