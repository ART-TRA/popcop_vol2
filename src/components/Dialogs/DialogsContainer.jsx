import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialog_reducer";
import connect from "react-redux/lib/connect/connect";

// const DialogContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 let state = store.getState().messagesPage;
//                 let addMessage = () => {
//                     store.dispatch(addMessageActionCreator());
//                 };
//                 let changeMessageText = (text) => {
//                     store.dispatch(updateMessageTextActionCreator(text));
//                 };
//                 return <Dialogs addMessage={addMessage}
//                                 changeMessageText={changeMessageText}
//                                 newMessageText={state.newMessageText}
//                                 messages={state.messages}
//                                 dialogs={state.dialogs}/>
//             }
//             }
//         </StoreContext.Consumer>)
// };

//созд-ся 2 ф-ции: первая возвращает часть необх state
const mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        messages: state.messagesPage.messages,
        dialogs: state.messagesPage.dialogs,
        //messagesPage: state.messagesPage
        isAuth: state.auth.isAuth
    }
};
//вторая возвращает объект со всеми dispatch, в кач-ве параметра принимает dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        changeMessageText: (text) => {
            dispatch(updateMessageTextActionCreator(text));
        }
    }
};

//контейнерная компонента при помощи метода connect возвращает презентационную компоненту
//метода connect внутри себя имеет методы подписки на изм-е контента (subscribe(observer))
const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogContainer