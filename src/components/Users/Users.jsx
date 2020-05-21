import React from "react";
import style from './Users.module.css'
import userPhoto from "../../assets/images/empty_logo.png";

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
                        <img className={style.userImg} src={u.photos.small !==null ? u.photos.small : userPhoto} alt=""/>
                        {u.following
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
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