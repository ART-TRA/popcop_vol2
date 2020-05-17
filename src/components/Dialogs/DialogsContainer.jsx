import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialog_reducer";

const DialogContainer=(props)=>{
    let state = props.store.getState().messagesPage;
    let addMessage = ()=>{
        props.store.dispatch(addMessageActionCreator());
    };
    let changeMessageText = (text)=>{
        props.store.dispatch(updateMessageTextActionCreator(text));
    };

    return <Dialogs addMessage={addMessage}
                    changeMessageText={changeMessageText}
                    newMessageText={state.newMessageText}
                    messages={state.messages}
                    dialogs={state.dialogs}/>
};

export default DialogContainer