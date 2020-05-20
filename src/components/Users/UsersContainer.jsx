import React from "react";
import Users from "./Users";
import connect from "react-redux/lib/connect/connect";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users_reducer";

const mapStateToProps = (state) => { //принимает весь state целиком
    return {
        users: state.usersPage.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: userId => {
            dispatch(followAC(userId));
        },
        unfollow: userId => {
            dispatch(unfollowAC(userId));
        },
        setUsers: users => {
            dispatch(setUsersAC(users));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer