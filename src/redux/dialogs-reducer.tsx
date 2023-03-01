import {ActionsType, DialogPageType} from './store'

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT" as const
const ADD_MESSAGE = "ADD-MESSAGE" as const


let initialState = {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Victor"},
            {id: 6, name: "Valera"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is yout it-kamasutra?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"},
        ],
        newMessageBody: ""
    }

const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType) => {

    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
       return {
            ...state,
            newMessageBody: action.newMessage
        }
        // stateCopy.newMessageBody = action.newMessage
    } else if (action.type === ADD_MESSAGE) {
        let newMessageText = state.newMessageBody;
        let stateCopy = {
            ...state,
            newMessageBody: "",
            messages: [...state.messages, {id: 6, message: newMessageText}]
        }
        // stateCopy.newMessageBody = ""
        // stateCopy.messages.push({id: 6, message: newMessageText})
        return stateCopy
    }
    return state;
}

export const sendMessageAC = () => {
    return {
      type: ADD_MESSAGE
    } as const
  } 
  
  export type AddMessageType = {
    type: "ADD-MESSAGE"
  }
  
  export const updateNewMessageBodyAC = (newMessage: string) => {
    return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newMessage: newMessage
    }
  }
  
  export type ChangeNewMessageType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newMessage: string
  }

export default dialogsReducer;