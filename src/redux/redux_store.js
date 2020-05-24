import {applyMiddleware, combineReducers, createStore} from "redux";
import profile_reducer from "./profile_reducer";
import dialog_reducer from "./dialog_reducer";
import news_reducer from "./news_reducer";
import users_reducer from "./users_reducer";
import auth_reducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: profile_reducer,
    messagesPage: dialog_reducer,
    newsPage: news_reducer,
    usersPage: users_reducer,
    auth: auth_reducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store; //чтобы в консоли браузера обращаться к store и его методам для отладки

export default store