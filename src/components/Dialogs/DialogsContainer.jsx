import React from "react";
import Dialogs from "./Dialogs";
import {addMessage} from "../../redux/dialogReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
        dialogs: state.messagesPage.dialogs,
        //messagesPage: state.messagesPage
        isAuth: state.auth.isAuth
    }
};

//контейнерная компонента при помощи метода connect возвращает презентационную компоненту
//метод connect внутри себя имеет методы подписки на изм-е контента (subscribe(observer))
export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialogs);

