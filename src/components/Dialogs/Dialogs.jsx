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

//добавил массивы с данными по польз-лям и сообщениям
const dialogsData = [
    {id: "1", name:"Seydoux"},
    {id: "2", name:"Reedus"},
    {id: "3", name:"Mikkelsen"},
    {id: "4", name:"Qualley"},
    {id: "5", name:"DelToro"}
]

const messagesData= [
    {id: "1", text:"Freeze"},
    {id: "2", text:"You're busted buddy!"},
    {id: "3", text:"I'm a cop"},
]

const Dialogs = ()=>{
    return (
        <div className={style.dialogs}>
            <div className={style.dialog_persons}>
                <Dialog_person name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog_person name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog_person name={dialogsData[2].name} id={dialogsData[2].id}/>
                <Dialog_person name={dialogsData[3].name} id={dialogsData[3].id}/>
                <Dialog_person name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={style.messages}>
                <Message text={messagesData[0].text}/>
                <Message text={messagesData[1].text}/>
                <Message text={messagesData[2].text}/>
            </div>
        </div>
    )
}

export default Dialogs