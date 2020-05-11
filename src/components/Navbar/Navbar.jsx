import React from "react";
import style from './Navbar.module.css'

const Navbar = ()=>{
    return(
        <nav className='nav_menu'>
            <div className={style.menu_item}><a className={`${style.menu_item_link} ${style.active_item}`} href="/profile">Profile</a></div>
            <div className={style.menu_item}><a className={style.menu_item_link} href="/dialogs">Messages</a></div>
            <div className={style.menu_item}><a className={style.menu_item_link} href="/news">News</a></div>
            <div className={style.menu_item}><a className={style.menu_item_link} href="/music">Music</a></div>
            <div className={style.menu_item}><a className={style.menu_item_link} href="/gallery">Gallery</a></div>
            <div className={style.menu_item}><a className={style.menu_item_link} href="settings">Settings</a></div>
        </nav>
    )
}

export default Navbar