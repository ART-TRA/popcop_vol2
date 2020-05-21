const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1, //текущая страница (она будет выделена в меню выбора страниц)
    isFetching: false //отображение preloader (крутилки ожидания)
};

//ACTION CREATORS
export const follow = userId => ({type: FOLLOW, userId: userId});
export const unfollow = userId => ({type: UNFOLLOW, userId: userId});
export const setUsers = users => ({type: SET_USERS, users});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = totalCount => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const togglePreloader = fetching => ({type: TOGGLE_PRELOADER, fetching});


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
                //users: [...state.users, ...action.users] //польз-ли добавляются в конец списка
                users: [...action.users] //страницы польз-лей перепиывают др др
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
        default:
            return state
    }

};

export default users_reducer