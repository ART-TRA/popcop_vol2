import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import newsReducer from "./newsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer"
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';



let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware))); //создание store

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store; //чтобы в консоли браузера обращаться к store и его методам для отладки

export default store