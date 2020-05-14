import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/state";


const Dialogs = (props)=>{
    let dialogs = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>) //из массива сообщений возвращается компонент DialogItem  с параметрами name, id
    let messages = props.state.messages.map(m => <Message text={m.text}/>) //из массива сообщений возвращается компонент Message  с параметром text

    let refEl = React.createRef();
    let addMessage = ()=>{
        props.dispatch(addMessageActionCreator());
    };
    let changeMessageText = ()=>{
        let text = refEl.current.value;
        props.dispatch(updateMessageTextActionCreator(text));
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialog_persons}>
                {dialogs}
            </div>
            <div className={style.messages}>
                {messages}
                <textarea ref={refEl} onChange={changeMessageText} value={props.state.newMessageText}/>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    )
};

export default Dialogs