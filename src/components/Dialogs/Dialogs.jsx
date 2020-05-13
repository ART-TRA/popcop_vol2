import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

// //массивы с данными по польз-лям и сообщениям
// const dialogsData = [
//     {id: "1", name:"Seydoux"},
//     {id: "2", name:"Reedus"},
//     {id: "3", name:"Mikkelsen"},
//     {id: "4", name:"Qualley"},
//     {id: "5", name:"DelToro"}
// ]
//
// const messagesData= [
//     {id: "1", text:"Freeze"},
//     {id: "2", text:"You're busted buddy!"},
//     {id: "3", text:"I'm a cop"},
// ]



const Dialogs = (props)=>{
    let dialogs = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>) //из массива сообщений возвращается компонент DialogItem  с параметрами name, id
    let messages = props.messages.map(m => <Message text={m.text}/>) //из массива сообщений возвращается компонент Message  с параметром text
    return (
        <div className={style.dialogs}>
            <div className={style.dialog_persons}>
                {dialogs}
            </div>
            <div className={style.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs