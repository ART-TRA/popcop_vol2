import {auth_API} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA'; //установить пользовательские данные

export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
});

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
};

export const auth = () => async dispatch => {
    let response = await auth_API.auth();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(response.data.id, response.data.login, response.data.email, true));
    }
};


export const login = (email, password, rememberMe) => async dispatch => {
    let response = await auth_API.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(auth());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
};

export const logout = () => async dispatch => {
    let response = await auth_API.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer
