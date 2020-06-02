import React from "react";
import style from "./User.module.css"
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/empty_logo2.jpg";

const User = ({user, followingInProgress, follow_t, unfollow_t}) => {
    return (
        <div className={style.user}>
            <div className={style.userLogo}>
                <NavLink className={style.userLink} to={/profile/ + user.id}>
                    <img className={style.userImg} src={user.photos.small !== null ? user.photos.small : userPhoto}/>
                </NavLink>
            </div>
            <div className={style.userDesc}>
                <div>
                    <div className={style.name}>{user.name}</div>
                    <div className={style.status}>{user.status}</div>
                </div>
                <div className={style.location}>
                    {/*<div className={style.city}>{'user.location.city'}</div>*/}
                    {/*<div className={style.country}>{'user.location.country'}</div>*/}

                </div>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow_t(user.id);
                    }}>Unfollow</button>

                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow_t(user.id);
                    }}>Follow</button>}
            </div>
        </div>
    )
};

export default User