import {rerenderEntireTree} from "../render";

let state = {
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
};

export let addMessage = () =>{
    let newMessage = {
        id: 4,
        text: state.messagesPage.newMessageText
    };
    state.messagesPage.messages.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireTree(state);
};

export let updateMessageText = newMessage => {
    state.messagesPage.newMessageText = newMessage;
    rerenderEntireTree(state);
};



export let updateNewPostText = newText =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export let addPost = () => { //добавить пост
    let newPost = {
        id: "4",
        message: state.profilePage.newPostText,
        likes: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state); //при вызове ф-ции добавить пост вызыв-ся ф-ция перерисовки
};

export default state