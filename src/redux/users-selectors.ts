import {AppRootStateType} from "./redux-store";
import { createSelector } from 'reselect'
import {UserStateType} from "./users-reducer";


const getUsersSelector = (state: AppRootStateType) => {
    return state.usersPage.users
}


export const getUsersCreateSelector = createSelector(getUsersSelector,
    (users: UserStateType[]) => {
    return users.filter(u => true)
})



export const getPageSizeWithSelector = (state: AppRootStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCountWithSelector = (state: AppRootStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPageWithSelector = (state: AppRootStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetchingWithSelector = (state: AppRootStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgressWithSelector = (state: AppRootStateType) => {
    return state.usersPage.followingInProgress
}