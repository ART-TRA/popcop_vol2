const SEND_MESSAGE = 'SEND_MESSAGE';

export const addMessage = newMessageBody => {
    return {type: SEND_MESSAGE, newMessageBody}
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
    ]
};

const dialogReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                text: action.newMessageBody
            };
            //копирование объекта и сразу его возвращение
            //вместо
            //let stateCopy = {...state};
            //stateCopy.messages = [...state.messages];
            //stateCopy.messages.push(newMessage);
            //return stateCopy;
            //ПО ВЗРОСЛОМУ, ПО МУЖСКИ ПИШЕТСЯ ТАК!!!!!!!!!!!!!!!!!!
            return {
                ...state,
                //вместо метода push, элемент, который нужно добавить в массив, записывается в конце
                messages: [...state.messages, newMessage]
            };

        default:
            return state
    }
};

export default dialogReducer