import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object_helpers";

const FOLLOW = 'usersPage/FOLLOW';
const UNFOLLOW = 'usersPage/UNFOLLOW';
const SET_USERS = 'usersPage/SET_USERS';
const SET_CURRENT_PAGE = 'usersPage/SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'usersPage/SET_USERS_TOTAL_COUNT';
const TOGGLE_PRELOADER = 'usersPage/TOGGLE_PRELOADER';
const TOGGLE_FOLLOWING = 'usersPage/TOGGLE_FOLLOWING';

let initialState = {
    users: [],
    pageSize: 50,
    portionSize: 10,
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
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
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
export const getUsers = (currentPage, pageSize) => async dispatch => {
    dispatch(togglePreloader(true));
    dispatch(setCurrentPage(currentPage));
    const response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(togglePreloader(false));
    dispatch(setUsers(response.items));
    dispatch(setUsersTotalCount(response.totalCount));
};

export const followUnfollowFlow = async (dispatch, userId, methodAPI, actionCreator) => {
    dispatch(toggleFollowing(true, userId));
    const data = await methodAPI(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowing(false, userId));
};

export const unfollow_t = userId => async dispatch => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(userId), unfollow);
};

export const follow_t = userId => async dispatch => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(userId), follow);
};






































export default usersReducer