import {ActionsType} from './store'
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";


const FOLLOW = "FOLLOW" as const
const UNFOLLOW = "UNFOLLOW" as const
const SET_USERS = "SET-USERS" as const
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE" as const
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT" as const
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING" as const
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE-IS-FOLLOWING-IN-PROGRESS" as const


export type UserStateType = {
    id: number
    photos:{small:string, large: string}
    followed: boolean
    name: string
    status: string
    location: string
}

export type UsersStatePropsType = {
    users: Array<UserStateType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

let initialState: UsersStatePropsType = {
    users:[],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state: UsersStatePropsType = initialState, action: ActionsType): UsersStatePropsType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export const follow = (userId: number) => ( {type: FOLLOW, userId} as const )
export const unfollow = (userId: number) => ( {type: UNFOLLOW, userId} as const )
export const setUsers = (users: Array<UserStateType>) => ( {type: SET_USERS, users} as const )
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId} as const)


export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}


export default usersReducer;