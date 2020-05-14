const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

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
    // addMessage(){
    //     let newMessage = {
    //         id: 4,
    //         text: this._state.messagesPage.newMessageText
    //     };
    //     this._state.messagesPage.messages.push(newMessage);
    //     this._state.messagesPage.newMessageText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateMessageText(newMessage){
    //     this._state.messagesPage.newMessageText = newMessage;
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText){
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    // addPost(){
    //     let newPost = {
    //         id: "4",
    //         message: this._state.profilePage.newPostText,
    //         likes: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // }

    dispatch(action){
        if (action.type==='ADD-POST') {
            let newPost = {
                id: "4",
                message: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type==='UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type==='UPDATE-MESSAGE-TEXT'){
            this._state.messagesPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        } else if(action.type==='ADD-MESSAGE'){
            let newMessage = {
                id: 4,
                text: this._state.messagesPage.newMessageText
            };
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
    }
};

// export const addPostActionCreator = ()=> { ЭТО!!!!!!!!!!!
//     return {type: ADD_POST}};
export const addPostActionCreator = ()=> ({type: ADD_POST}); //И ЭТО ОДНО И ТО ЖЕ

export const updateNewPostTextActionCreator = (text)=> {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
};

export const addMessageActionCreator =()=>{
    return {type: ADD_MESSAGE}
};

export const updateMessageTextActionCreator =(text)=>{
    return {type: UPDATE_MESSAGE_TEXT, newMessage: text}
};

export default store