import {ActionsType} from './store'


const FOLLOW = "FOLLOW" as const
const UNFOLLOW = "UNFOLLOW" as const
const SET_USERS = "SET-USERS" as const

type AddressType = {
    city: string
    country: string
}

export type UserStateType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: AddressType
}

export type UsersStatePropsType = {
    users: Array<UserStateType>
}

let initialState:UsersStatePropsType = {
    users:[]
}

const usersReducer = (state: UsersStatePropsType = initialState, action: ActionsType):UsersStatePropsType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id ===action.userId) {
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId: number) => ( {type: FOLLOW, userId} as const )
export const unFollowAC = (userId: number) => ( {type: UNFOLLOW, userId} as const )
export const setUsersAC = (users: Array<UserStateType>) => ( {type: SET_USERS, users} as const )


export default usersReducer;