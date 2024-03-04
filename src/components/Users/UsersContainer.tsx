import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    follow, getUsers,
    setCurrentPage, toggleFollowingProgress, unfollow,
    UserStateType
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPageWithSelector, getFollowingInProgressWithSelector, getIsFetchingWithSelector,
    getPageSizeWithSelector,
    getTotalUsersCountWithSelector, getUsersCreateSelector
} from "../../redux/users-selectors";

type UserPropsType = {
    // setUsers: (users: UserStateType[]) => void
    users: UserStateType[]
    follow: (value: number) => void
    unfollow: (value: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    getUsers: (currentPage:number, pageSize: number) => void
}
class UsersContainer extends React.Component<UserPropsType, UserPropsType>{


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
        <Users          totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        followingInProgress={ this.props.followingInProgress}
        />
        </>
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: getUsersCreateSelector(state),
        pageSize: getPageSizeWithSelector(state),
        totalUsersCount: getTotalUsersCountWithSelector(state),
        currentPage: getCurrentPageWithSelector(state),
        isFetching: getIsFetchingWithSelector(state),
        followingInProgress: getFollowingInProgressWithSelector(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        toggleFollowingProgress,
        follow,
        getUsers,
        unfollow})
)(UsersContainer)