import React from "react";
import Dialogs from "./Dialogs";
import {addMessage, updateMessageText} from "../../redux/dialog_reducer";
import connect from "react-redux/lib/connect/connect";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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

const mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        messages: state.messagesPage.messages,
        dialogs: state.messagesPage.dialogs,
        //messagesPage: state.messagesPage
        isAuth: state.auth.isAuth
    }
};

//контейнерная компонента при помощи метода connect возвращает презентационную компоненту
//метод connect внутри себя имеет методы подписки на изм-е контента (subscribe(observer))
export default compose(
    connect(mapStateToProps, {addMessage,updateMessageText}),
    withAuthRedirect
)(Dialogs);

