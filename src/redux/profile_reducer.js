const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = ()=> ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text)=> {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
};

const profile_reducer = (state, action)=>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: "4",
                message: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state; //если происх return то break не нужен
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: //если придёт незафиксир action то просто вернётся первонач state
            return state;
    }
};

export default profile_reducer