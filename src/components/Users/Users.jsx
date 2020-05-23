import React from "react";
import style from './Users.module.css'
import userPhoto from "../../assets/images/empty_logo.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) =>{
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize); //кол-во страниц польз-лей
    let pages = [];
    for(let i=1;i<=pagesCount;++i){
        pages.push(i);
    }

    return(
        <div>
            <div className={style.pageNumber}>
                {pages.map(p =>{
                    return <span className={props.currentPage === p && style.currentPage}
                                 onClick={() => props.onPageChanged(p)}>{p}</span>})}
            </div>
            {props.users.map(u =>
                <div key={u.id} className={style.users}>
                    <div className={style.userLogo}>
                        <NavLink to={/profile/ + u.id}>
                            <img className={style.userImg} src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                        </NavLink>
                        {u.following
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "7fea701d-c8e3-4332-b214-eeac87de4bac"
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                });
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "7fea701d-c8e3-4332-b214-eeac87de4bac"
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                });
                            }}>Follow</button>}
                    </div>
                    <div className={style.userDesc}>
                        <div>
                            <div className={style.name}>{u.name}</div>
                            <div className={style.status}>{u.status}</div>
                        </div>
                        <div className={style.location}>
                            <div className={style.city}>{'u.location.city'}</div>
                            <div className={style.country}>{'u.location.country'}</div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Users