import {auth_API} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'; //установить пользовательские данные

export const setAuthUserData = (userId,login,email) => ({type: SET_USER_DATA, data: {userId,login,email}});

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state
    }
};

export const auth = () => {
    return dispatch => {
        return auth_API.auth().then(response => {
            if(response.resultCode === 0){
                dispatch(setAuthUserData(response.data.userId, response.data.login, response.data.email));
            }
        })
    }
};

export default authReducer
