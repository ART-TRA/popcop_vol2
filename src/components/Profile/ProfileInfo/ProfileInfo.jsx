import React from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo=(props)=>{
    if(!props.profile){
        return Preloader
    }
    return(
        <div className={style.profile_info}>
            {/*<img className={style.bg_img} src="https://i.playground.ru/p/SCfJ19mum0SsgDhAN1jALA.jpeg" alt=""/>*/}
            <img className={style.profile_img} src={props.profile.photos.large !==null
                ? props.profile.photos.large
                : "https://avatars.mds.yandex.net/get-zen_doc/1570751/pub_5d19ee6e8706ab00adcd8102_5d19f32457394600adca835f/scale_1200"}/>
            <div className={style.profile_desc}>
                <div className={style.name}>{props.profile.fullName}</div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
};

export default ProfileInfo