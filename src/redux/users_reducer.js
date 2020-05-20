const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []

};

export const followAC = userId => ({type: FOLLOW, userId: userId});
export const unfollowAC = userId => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = users => ({type: SET_USERS, users});

const users_reducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => { //map возвращае массив, поэтому квадратные скобки не нужны
                    if(u.id === action.userId){
                        return {...u, following: true}
                    }
                    return u
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, following: false}
                    }
                    return u
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        default:
            return state
    }

};

export default users_reducer