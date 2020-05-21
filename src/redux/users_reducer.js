const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1, //текущая страница (она будет выделена в меню выбора страниц)
    isFetching: false //отображение preloader (крутилки ожидания)
};

export const followAC = userId => ({type: FOLLOW, userId: userId});
export const unfollowAC = userId => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = users => ({type: SET_USERS, users});
export const setCurrentPageAC = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC = totalCount => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const toggleIsFetchingAC = fetching => ({type: TOGGLE_IS_FETCHING, fetching});


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
        case TOGGLE_IS_FETCHING:
            return {
              ...state,
              isFetching: action.fetching
            };
        default:
            return state
    }

};

export default users_reducer