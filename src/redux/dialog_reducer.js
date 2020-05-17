const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

export const addMessageActionCreator =()=>{
    return {type: ADD_MESSAGE}
};

export const updateMessageTextActionCreator =(text)=>{
    return {type: UPDATE_MESSAGE_TEXT, newMessage: text}
};

let initialState = { //первоначальный state который заносится в reducer в кач-ве параметра по умолчанию для state
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
};

const dialog_reducer = (state = initialState, action) =>{
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