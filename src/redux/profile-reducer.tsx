import {PostType, ActionsType, ProfilePageType, ProfileType, TDispatch} from './store'
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const ADD_POST = "profile/ADD-POST" as const
const SET_USER_PROFILE = "profile/SET-USER-PROFILE" as const
const SET_STATUS = "profile/SET-STATUS" as const
const DELETE_POST = "profile/DELETE_POST" as const
const SET_PHOTO = "SET-PHOTO" as const


let initialState:ProfilePageType = {
        posts: [
            {likesCount: 0, id: 1, message: "One"},
            {likesCount: 0, id: 2, message: "Two"},
            {likesCount: 0, id: 3, message: "Three"}
        ],
        profile: null,
    status: "",
    photo: "",
    }



export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): any => {

    
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
    } else if (action.type === SET_PHOTO) {
        return {
            ...state,
            profile: {...state.profile, photos: action.type}
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

export const setPhoto = (file: any) => {
    return {
        type: SET_PHOTO, file
    }
}


export const getUserProfileTC = (userId: string) => async (dispatch: Dispatch<ActionsType>) => {
    let res = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(res.data));
}

export const setPhotoTC = (file: any) => async (dispatch: Dispatch<ActionsType>) => {
    let res = await profileAPI.savePhoto(file)
    if (res.data.resultCode === 0) {
        dispatch(setPhoto(res.data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: TDispatch, getState: any) => {
    const userId = getState().auth.userId
    let res = await profileAPI.saveProfile(profile)
    if (res.data.resultCode === 0) {
        dispatch(getUserProfileTC(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: res.data.messages[0]}))
        return Promise.reject(res.data.messages[0])
    }
}


export const setProfileStatusAC = (status: string) => ({type: SET_STATUS, status} as const)
export const setPhotoAC = (photos: any) => ({type: SET_PHOTO} as const)

export const getProfileStatusTC = (userId: string) => async (dispatch: Dispatch<ActionsType>) => {
    let res = await profileAPI.getStatus(userId)
    dispatch(setProfileStatusAC(res.data));
}

export const updateStatusTC = (status: string) => async (dispatch: Dispatch<ActionsType>) => {
    let res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setProfileStatusAC(status))
    }
}
  


export default profileReducer;