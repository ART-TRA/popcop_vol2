import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialog_reducer";
import StoreContext from "../../StoreContext";

const DialogContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().messagesPage;
                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };
                let changeMessageText = (text) => {
                    store.dispatch(updateMessageTextActionCreator(text));
                };
                return <Dialogs addMessage={addMessage}
                                changeMessageText={changeMessageText}
                                newMessageText={state.newMessageText}
                                messages={state.messages}
                                dialogs={state.dialogs}/>
            }
            }
        </StoreContext.Consumer>)
};

export default DialogContainer