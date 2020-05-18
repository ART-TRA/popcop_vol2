import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = ()=>{
    return(
        <nav className='nav_menu'>
            <div className={style.menu_item}>
                <NavLink className={style.menu_item_link} activeClassName={style.active_item} to="/profile">Profile</NavLink>
            </div>
            <div className={style.menu_item}>
                <NavLink className={style.menu_item_link} activeClassName={style.active_item} to="/dialogs">Messages</NavLink>
            </div>
            <div className={style.menu_item}>
                <NavLink className={style.menu_item_link} activeClassName={style.active_item} to="/news">News</NavLink>
            </div>
            <div className={style.menu_item}>
                <NavLink className={style.menu_item_link} activeClassName={style.active_item} to="/music">Music</NavLink>
            </div>
            <div className={style.menu_item}>
                <NavLink className={style.menu_item_link} activeClassName={style.active_item} to="/gallery">Gallery</NavLink>
            </div>
            <div className={style.menu_item}>
                <NavLink className={style.menu_item_link} activeClassName={style.active_item} to="/settings">Settings</NavLink>
            </div>
            <div className={style.menu_item}>
                <NavLink className={style.menu_item_link} activeClassName={style.active_item} to="/users">Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar