import {createSelector} from "reselect";

//простой селектор (примитивный) принимающий весь state и возвращающий часть state (в данном случае users) и не меняющий их
export const getUsersSimple = state => {
    return state.usersPage.users
};

//более сложный селектор выполняющий фильтрацию users (в данном случае пропускает всех)
//задействует результат работы getAllUsers
//т.к. происх фильтрация, то проих изм-е state и созд-ся копия массива users, а значит будет всегда выполняться перерисовка (render)
export const getUsersSelector = state => {
  return getUsersSimple(state).filter(u => true);
};

//сложный селектор, созд с помощью reselect, принимающий в кач-ве параметров зависимости для перерисовки
//если завис-ти не изм-ся то перерис-ки не происходит (в завис-тях может быть неск-ко селекторов)
export const getAllUsers = createSelector(getUsersSimple,(users) =>{
    return users.filter(u => true); //фейковая фильтрация на время!!!
});

export const getPageSize = state => {
    return state.usersPage.pageSize
};

export const getTotalUsersCount = state => {
    return state.usersPage.totalUsersCount
};

export const getCurrentPage = state => {
    return state.usersPage.currentPage
};

export const getIsFetching = state => {
    return state.usersPage.isFetching
};

export const getFollowingInProgress = state => {
    return state.usersPage.followingInProgress
};