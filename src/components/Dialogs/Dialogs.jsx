import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props)=>{
    let dialogs = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>) //из массива сообщений возвращается компонент DialogItem  с параметрами name, id
    let messages = props.state.messages.map(m => <Message text={m.text}/>) //из массива сообщений возвращается компонент Message  с параметром text

    let refEl = React.createRef()
    let addMessage = ()=>{
        let text = refEl.current.value
        alert(text)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialog_persons}>
                {dialogs}
            </div>
            <div className={style.messages}>
                {messages}
                <input type="text" placeholder='add message' ref={refEl}/>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    )
}

export default Dialogs