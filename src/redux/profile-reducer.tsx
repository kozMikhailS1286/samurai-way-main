import {PostType, ActionsType, ProfilePageType, ProfileType} from './store'
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";


const ADD_POST = "ADD-POST" as const
const SET_USER_PROFILE = "SET-USER-PROFILE" as const
const SET_STATUS = "SET-STATUS" as const
const DELETE_POST = "DELETE_POST" as const


let initialState:ProfilePageType = {
        posts: [
            {likesCount: 0, id: 1, message: "One"},
            {likesCount: 0, id: 2, message: "Two"},
            {likesCount: 0, id: 3, message: "Three"}
        ],
        profile: null,
    status: ""
    }



export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

    
    if (action.type === ADD_POST) {
        let newPost: PostType = {
          id: 5,
          message: action.newMessagePost,
          likesCount: 0
        }
        return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ""
        }
    } else if (action.type === SET_USER_PROFILE) {
        return {
            ...state,
            profile: action.profile
        }
    } else if (action.type === SET_STATUS) {
        return {
            ...state,
            status: action.status
        }
    } else if (action.type === DELETE_POST) {
        return {
            ...state,
            posts: state.posts.filter(p => p.id !== action.id)
        }
    } else {
        return state;
    }
}

export type AddPostActionType = {
    type: "ADD-POST"
}

export const addPostAC = (newMessagePost: string) => {
    return {
        type: ADD_POST, newMessagePost
    } as const
}

export const deletePostAC = (id: number) => {
    return {
        type: DELETE_POST, id
    } as const
}

export const setUserProfile = (profile: ProfileType | null) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}


export const getUserProfileTC = (userId: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        usersAPI.getProfile(userId)
            .then((response) => {
                dispatch(setUserProfile(response.data));
            });
    }
}




export const setProfileStatusAC = (status: string) => ({type: SET_STATUS, status} as const)

export const getProfileStatusTC = (userId: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        profileAPI.getStatus(userId)
            .then((response) => {
                dispatch(setProfileStatusAC(response.data));
            });
    }
}

export const updateStatusTC = (status: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        profileAPI.updateStatus(status)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    // dispatch(setProfileStatusAC())
                }
            })
    }
}
  


export default profileReducer;