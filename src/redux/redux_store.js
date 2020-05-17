import {combineReducers, createStore} from "redux";
import profile_reducer from "./profile_reducer";
import dialog_reducer from "./dialog_reducer";
import news_reducer from "./news_reducer";

let reducers = combineReducers({
    profilePage: profile_reducer,
    messagesPage: dialog_reducer,
    newsPage: news_reducer
});

let store = createStore(reducers);

export default store