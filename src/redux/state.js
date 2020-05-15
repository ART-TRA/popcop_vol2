import profile_reducer from "./profile_reducer";
import dialog_reducer from "./dialog_reducer";

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
        profile_reducer(this._state.profilePage, action);
        dialog_reducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }

};

export default store