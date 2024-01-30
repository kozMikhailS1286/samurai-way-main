import {AppRootStateType} from "./redux-store";

export const getUsersWithSelector = (state: AppRootStateType) => {
    return state.usersPage.users
}

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