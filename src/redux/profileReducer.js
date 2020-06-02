import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

//ACTION CREATORS
export const addPost = postText => ({type: ADD_POST, postText});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = status => ({type: SET_USER_STATUS, status});
export const deletePost = postId => ({type: DELETE_POST, postId});

let initialState = {
    posts: [
        {id: "1", message: "Seydoux", likes: 7},
        {id: "2", message: "Reedus", likes: 4},
        {id: "3", message: "Mikkelson", likes: 6},
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: "4",
                message: action.postText,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };
        default: //если придёт незафиксир action то просто вернётся первонач state
            return state;
    }
};

//THUNK
export const getProfile = userId => async dispatch => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
};


export const getStatus = userId => async dispatch => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
};

export const updateStatus = status => async dispatch => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};

export default profileReducer