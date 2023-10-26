import {PostType, ActionsType, ProfilePageType, ProfileType} from './store'
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";


const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT" as const
const SET_USER_PROFILE = "SET-USER-PROFILE" as const


let initialState:ProfilePageType = {
        posts: [
            {id: 1, message: "Hi, howe are you?", likesCount: 12},
            {id: 2, message: "It`s my first post", likesCount: 11},
            {id: 3, message: "Blabla", likesCount: 11},
            {id: 4, message: "Dada", likesCount: 11},
        ],
        newPostText: "it-kamasutra.com",
        profile: null
    }



const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

    
    if (action.type === ADD_POST) {
        let newPost: PostType = {
          id: 5,
          message: state.newPostText,
          likesCount: 0
        }
        return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ""
        }
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        return  {
            ...state,
            newPostText: action.newText
        }
    } else if (action.type === SET_USER_PROFILE) {
        return {
            ...state,
            profile: action.profile
        }
    }
    return state;
}

export type AddPostActionType = {
    type: "ADD-POST"
}

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
  

export type ChangeNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

export const changeNewTextAC = (newText: string) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: newText
    }
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
  


export default profileReducer;