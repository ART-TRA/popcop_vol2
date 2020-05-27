import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';

let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1, //текущая страница (она будет выделена в меню выбора страниц)
    isFetching: true, //отображение preloader (крутилки ожидания)
    followingInProgress: [] //массив для добавления активных кнопок подписки польз-лей (все кнопки, которые сюда попадают блокируются до прихода response)
};

//ACTION CREATORS
export const follow = userId => ({type: FOLLOW, userId: userId});
export const unfollow = userId => ({type: UNFOLLOW, userId: userId});
export const setUsers = users => ({type: SET_USERS, users});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = totalCount => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const togglePreloader = fetching => ({type: TOGGLE_PRELOADER, fetching});
export const toggleFollowing = (followed, userId) =>({type: TOGGLE_FOLLOWING, followed, userId});

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => { //map возвращает массив, поэтому квадратные скобки не нужны
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        case SET_USERS:
            return {
                ...state,
                //users: [...state.users, ...action.users] //польз-ли добавляются в конец списка
                users: action.users //страницы польз-лей перепиывают др др
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_USERS_TOTAL_COUNT:
            return{
                ...state,
                totalUsersCount: action.totalCount
            };
        case TOGGLE_PRELOADER:
            return {
              ...state,
              isFetching: action.fetching
            };
        case TOGGLE_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.followed
                    ? [...state.followingInProgress, action.userId] //если кнопка нажата, в массив followingInProgress добавляется userId для блокировки
                    : state.followingInProgress.filter(id => id != action.userId) //если нет, то удаляется из массива
            };
        default:
            return state
    }

};

//THUNK----------------------------------------------------------------------
export const getUsers = (currentPage, pageSize) => { //thunkCreator
    return dispatch => {
        dispatch(togglePreloader(true));
        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(togglePreloader(false));
            dispatch(setUsers(response.items));
            dispatch(setUsersTotalCount(response.totalCount));
        });
    };
};

export const unfollow_t = userId => { //thunkCreator
    return dispatch => {
        dispatch(toggleFollowing(true, userId));
        usersAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userId))
            }
            dispatch(toggleFollowing(false, userId));
        });
    }
};

export const follow_t = userId => { //thunkCreator
    return dispatch => {
        dispatch(toggleFollowing(true, userId));
        usersAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(toggleFollowing(false, userId));
        });
    }
};






































export default usersReducer