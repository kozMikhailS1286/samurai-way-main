import {PostType, ActionsType, ProfilePageType} from './store'


const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"


let initialState = {
        posts: [
            {id: 1, message: "Hi, howe are you?", likesCount: 12},
            {id: 2, message: "It`s my first post", likesCount: 11},
            {id: 3, message: "Blabla", likesCount: 11},
            {id: 4, message: "Dada", likesCount: 11},
        ],
        newPostText: "it-kamasutra.com"
    }

const profileReduser = (state: ProfilePageType = initialState, action: ActionsType) => {
    console.log('STATE', state);
    
    if (action.type === "ADD-POST") {
        console.log('AddPost', state);
        let newPost: PostType = {
          id: 5,
          message: state.newPostText,
          likesCount: 0
        }
        state.posts.push(newPost);
        state.newPostText = ""
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        console.log('UPDATE-NEW-POST-TEXT', action);
        state.newPostText = action.newText
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
    } as const
}
  


export default profileReduser;