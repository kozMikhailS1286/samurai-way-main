import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UsersStatePropsType, UserStateType} from "../../redux/users-reducer";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserStateType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = compose(connect(mapStateToProps, mapDispatchToProps)(Users))

export default UsersContainer;