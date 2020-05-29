import {auth} from "./authReducer";

const INIT_SUCCESS = 'INIT_SUCCESS';

let initialState = {
    init: false
};

const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case INIT_SUCCESS:
            return {
                ...state,
                init: true
            };
        default:
            return state
    }
};

export const initSuccess = () => ({type: INIT_SUCCESS});
export const initApp = () => dispatch => {

    //обычно dispatch запускаем и забываем про него,т.к. это асинхронная операция, он выполнится сам,
    // но в данном случае нужно знать когда он выполнится, чтобы выполнить инициализацию
    //dispatch возвращает promise
    //здесь когда все promise выполнятся (они помещ-ся в массив all) в методе then выполнится инициализация

    let promise = dispatch(auth());
    Promise.all([promise]).then(() => {
        dispatch(initSuccess());
    });

};

export default appReducer