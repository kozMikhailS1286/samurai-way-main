import {ActionsType, DialogPageType} from './store'

const ADD_MESSAGE = "dialogs/ADD-MESSAGE" as const


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
        // newMessageBody: ""
    }

const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType) => {

    if (action.type === ADD_MESSAGE) {
        let newMessageText = action.newMessageBody;
        let stateCopy = {
            ...state,
            messages: [...state.messages, {id: 6, message: newMessageText}]
        }
        // stateCopy.newMessageBody = ""
        // stateCopy.messages.push({id: 6, message: newMessageText})
        return stateCopy
    }
    return state;
}

export const sendMessageAC = (newMessageBody: string) => {
    return {
      type: ADD_MESSAGE, newMessageBody
    } as const
  } 
  
  export type AddMessageType = {
    type: "ADD-MESSAGE"
  }

export default dialogsReducer;