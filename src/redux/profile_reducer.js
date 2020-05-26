import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

//ACTION CREATORS
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = status => ({type: SET_USER_STATUS, status});

let initialState = {
    posts: [
        {id: "1", message: "Seydoux", likes: 7},
        {id: "2", message: "Reedus", likes: 4},
        {id: "3", message: "Mikkelson", likes: 6},
    ],
    profile: null,
    newPostText: "",
    status: ""
};

const profile_reducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: "4",
                message: state.newPostText,
                likes: 0
            };
            return {
              ...state,
              posts: [...state.posts, newPost],
              newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status //статус, который приходит с сервера
            };

        default: //если придёт незафиксир action то просто вернётся первонач state
            return state;
    }
};

//THUNK
export const getProfile = userId =>{ //thunkCreator
    return dispatch => {
        return profileAPI.getProfile(userId).then(data =>{
            dispatch(setUserProfile(data));
        })
    }
};

export const getStatus = userId => dispatch => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setUserStatus(response.data));
    })
};

//без ретёрнов
export const updateStatus = status => dispatch => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    })
};


export default profile_reducer