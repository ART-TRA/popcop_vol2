import React from "react";
import connect from "react-redux/lib/connect/connect";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleFollowing,
    togglePreloader,
    unfollow
} from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersSubContainer extends React.Component {
    componentDidMount() {
        this.props.togglePreloader(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.togglePreloader(false);
            this.props.setUsers(response.items);
            this.props.setUsersTotalCount(response.totalCount);
        });
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.props.togglePreloader(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.togglePreloader(false);
            this.props.setUsers(response.items);

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
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowing={this.props.toggleFollowing}/>
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


export default connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    togglePreloader,
    follow,
    unfollow,
    toggleFollowing
})(UsersSubContainer);

