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
    },

    profilePage: {
        posts: [
            {id: "1", message: "Seydoux", likes: 7},
            {id: "2", message: "Reedus", likes: 4},
            {id: "3", message: "Mikkelson", likes: 6},
        ]
    }
};

export let addPost = newMessage => { //добавить пост
    let newPost = {
        id: "4",
        message: newMessage,
        likes: 0
    };
    state.profilePage.posts.push(newPost);
};



export default state