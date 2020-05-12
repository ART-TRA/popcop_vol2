import React from "react";
import style from './Dialogs.module.css'
//при добавлении первого тега линк в jsx автоматически имрорт-ся модуль навигации
import {NavLink} from "react-router-dom";

//отдельный компонент, который возвращает диалог с параметрами имени и id
const Dialog_person = (props)=>{
    const path = "/dialogs/" + props.id;
    return(
        <div className={style.dialog_person}>
            <NavLink className={style.dialog_person_link} activeClassName={style.active} to={path}>{props.name}</NavLink>
        </div>
    )
}
//отдельный компонент, который возвращает текст сообщения
const Message = (props)=>{
    return <div className={style.message}>{props.text}</div>
}

const Dialogs = ()=>{
    return (
        <div className={style.dialogs}>
            <div className={style.dialog_persons}>
                <Dialog_person name="Seydoux" id="1"/>
                <Dialog_person name="Reedus" id="2"/>
                <Dialog_person name="Mikkelsen" id="3"/>
                <Dialog_person name="Qualley" id="4"/>
                <Dialog_person name="DelToro" id="5"/>
            </div>
            <div className={style.messages}>
                <Message text="Freeze"/>
                <Message text="You're busted buddy!"/>
                <Message text="I'm a cop"/>
            </div>
        </div>
    )
}

export default Dialogs