const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

export const addMessageActionCreator =()=>{
    return {type: ADD_MESSAGE}
};

export const updateMessageTextActionCreator =(text)=>{
    return {type: UPDATE_MESSAGE_TEXT, newMessage: text}
};

const dialog_reducer = (state, action) =>{
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                text: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        default:
            return state
    }
};

export default dialog_reducer