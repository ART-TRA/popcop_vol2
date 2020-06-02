import React from "react";
import style from './Users.module.css'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, follow_t, unfollow_t, followingInProgress, portionSize, ...props}) => {
    return (
        <div className={style.users}>
            <Paginator totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       portionSize={portionSize}/>

            {props.users.map(u =>
                <User key={u.id} user={u}
                      followingInProgress={followingInProgress}
                      follow_t={follow_t}
                      unfollow_t={unfollow_t}/>
            )}
        </div>
    )
};

export default Users