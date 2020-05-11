import React from "react";
import style from './Navbar.module.css'

const Navbar = ()=>{
    return(
        <nav className='nav_menu'>
            <div className={style.menu_item}><a className={`${style.menu_item_link} ${style.active_item}`} href="#">Profile</a></div>
            <div className={style.menu_item}><a className={style.menu_item_link} href="#">Messages</a></div>
            <div className={style.menu_item}><a className={style.menu_item_link} href="#">News</a></div>
            <div className={style.menu_item}><a className={style.menu_item_link} href="#">Music</a></div>
            <div className={style.menu_item}><a className={style.menu_item_link} href="#">Settings</a></div>
        </nav>
    )
}

export default Navbar