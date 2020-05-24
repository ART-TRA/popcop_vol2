import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Redirect from "react-router-dom/es/Redirect";

const Dialogs = (props)=>{
    let dialogs = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>); //из массива сообщений возвращается компонент DialogItem  с параметрами name, id
    let messages = props.messages.map(m => <Message text={m.text}/>); //из массива сообщений возвращается компонент Message  с параметром text

    let addMessage = ()=>{
        props.addMessage();
    };
    let changeMessageText = (event)=>{
        let text = event.target.value;
        props.changeMessageText(text);
    };
    if(!props.isAuth) return <Redirect to='/login'/>;
    return (
        <div className={style.dialogs}>
            <div className={style.dialog_persons}>
                {dialogs}
            </div>
            <div className={style.messages}>
                {messages}
                <textarea onChange={changeMessageText} value={props.newMessageText}/>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    )
};

export default Dialogs