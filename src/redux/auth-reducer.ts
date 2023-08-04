import {ActionsType} from "./store";
import {UsersStatePropsType} from "./users-reducer";

const SET_USER_DATA = "SET_USER_DATA" as const


export type AuthReducerPropsType = {
    userId: number | null
    email: string | null,
    login: string
}

let initialState: AuthReducerPropsType = {
    userId: null, // в документашке просто "id"
    email: null,
    login: 'samurai',
    // isFetching: false // чтоб добавить позже самостоятельно
}


const authReducer = (state: AuthReducerPropsType = initialState, action: ActionsType): AuthReducerPropsType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        default:
            return state
    }
}

export const setUserData = (userId: number, email: string | null, login: string) => ( {type: SET_USER_DATA, data: {userId, email, login}} as const )



export default authReducer;