import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";



const add_news = 'ADD_NEWS';
const update_news = 'UPDATE_NEWS';
export const add_news_action_creator = ()=>{ //actionCreator возвращает action
    return {type: add_news}
};
export const update_news_text = (text)=>{
    return {type: update_news, newsText: text}
};



let store = {
    _state: {
        messagesPage: {
            dialogs: [
                {id: "1", name:"Seydoux"},
                {id: "2", name:"Reedus"},
                {id: "3", name:"Mikkelsen"},
                {id: "4", name:"Qualley"},
                {id: "5", name:"DelToro"}
            ],
            messages: [
                {id: "1", text:"Freeze"},
                {id: "2", text:"You're busted buddy!"},
                {id: "3", text:"I'm a cop"},
            ],
            newMessageText: ""
        },
        profilePage: {
            posts: [
                {id: "1", message: "Seydoux", likes: 7},
                {id: "2", message: "Reedus", likes: 4},
                {id: "3", message: "Mikkelson", likes: 6},
            ],
            newPostText: ""
        },
        newsPage: {
            news: [

            ],
            newsText: ''
        }
    },

    _callSubscriber(){
        console.log('state has changed');
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        profileReducer(this._state.profilePage, action);
        dialogReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }

};

export default store