import React from "react";
import style from './Users.module.css'
import userPhoto from "../../assets/images/empty_logo.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

const Users = (props) =>{
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize); //кол-во страниц польз-лей
    let pages = [];
    for(let i=1;i<=pagesCount;++i){
        pages.push(i);
    }

    return(
        <div>
            {/*мапим страницы для временной переключалки*/}
            <div className={style.pageNumber}>
                {pages.map(p =>{
                    return <span className={props.currentPage === p && style.currentPage}
                                 onClick={() => props.onPageChanged(p)}>{p}</span>})}
            </div>
            {/*здесь уже мапим список всех пользователей*/}
            {props.users.map(u =>
                <div key={u.id} className={style.users}>
                    <div className={style.userLogo}>
                        <NavLink to={/profile/ + u.id}>
                            <img className={style.userImg} src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                        </NavLink>

                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowing(true, u.id);

                                usersAPI.unfollow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleFollowing(false, u.id);
                                });
                            }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowing(true, u.id);

                                usersAPI.follow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowing(false, u.id);
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