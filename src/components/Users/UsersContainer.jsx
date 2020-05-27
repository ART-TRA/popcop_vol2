import React from "react";

import {
    follow, follow_t, getUsers,
    setCurrentPage,
    toggleFollowing,
    unfollow, unfollow_t
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";



class UsersSubContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = pageNumber => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowing={this.props.toggleFollowing}

                   unfollow_t={this.props.unfollow_t}
                   follow_t={this.props.follow_t}/>
        </>
    }
}

const mapStateToProps = (state) => { //принимает весь state целиком
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize, //размер страницы(кол-во польз-лей для отображения) и общее кол-во пользователей нужны для отрисовки страницы
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        follow,
        unfollow,
        toggleFollowing,
        getUsers, //thunk
        follow_t,
        unfollow_t
    }),
    withAuthRedirect
)(UsersSubContainer)


