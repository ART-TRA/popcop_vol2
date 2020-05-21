import React from "react";
import connect from "react-redux/lib/connect/connect";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/users_reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersSubContainer extends React.Component {
    componentDidMount() {
        this.props.togglePreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(rensponse => {
            this.props.togglePreloader(false);
            this.props.setUsers(rensponse.data.items);
            this.props.setUsersTotalCount(rensponse.data.totalCount);
        });
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.props.togglePreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(rensponse => {
            this.props.togglePreloader(false);
            this.props.setUsers(rensponse.data.items);

        });
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}/>
        </>
    }
}

const mapStateToProps = (state) => { //принимает весь state целиком
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize, //размер страницы(кол-во польз-лей для отображения) и общее кол-во пользователей нужны для отрисовки страницы
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setCurrentPage: currentPage => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setUsersTotalCount: totalCount => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
        togglePreloader: fetching => {
            dispatch(toggleIsFetchingAC(fetching));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersSubContainer);

export default UsersContainer