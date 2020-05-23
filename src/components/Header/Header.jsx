import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props)=>{
    return(
        <header className={style.header}>
            <img src="https://www.petcom.co.il/wp-content/uploads/2019/09/Kojima_Productions_logo.png" alt=""/>
            <div className={style.login}>
                {props.isAuth ? props.login : <NavLink className={style.login_link} to="/login">Login</NavLink>}

            </div>
        </header>
    )
}

export default Header
