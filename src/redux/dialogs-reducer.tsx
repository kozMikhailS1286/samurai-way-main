import {ActionsType, DialogPageType} from './state'

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"

const dialogsReduser = (state: DialogPageType, action: ActionsType) => {
    if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
        state.newMessageBody = action.newMessage
    } else if (action.type === "ADD-MESSAGE") {
        let newMessageText = state.newMessageBody;
        state.newMessageBody = ""
        state.messages.push({id: 6, message: newMessageText})
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
    } as const
  }
  
  export type ChangeNewMessageType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newMessage: string
  }

export default dialogsReduser;