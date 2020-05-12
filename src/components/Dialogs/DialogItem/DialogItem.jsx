import React from "react";
import style from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props)=>{
    const path = "/dialogs/" + props.id;
    return(
        <div className={style.dialog_person}>
            <NavLink className={style.dialog_person_link} activeClassName={style.active} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem