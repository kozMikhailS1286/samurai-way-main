import React from 'react'
import { sendMessageAC, updateNewMessageBodyAC } from './../../redux/dialogs-reducer';
import { ActionsType, StoreType } from '../../redux/store'
import Dialogs from "./Dialogs";


type DialogsType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsType) => {

    let state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC());
    }

    const onNewMessageChange = (body: string) => {
           props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return <Dialogs updateNewMessageBodyAC={onNewMessageChange} sendMessage={onSendMessageClick} dialogPage={state}/>
}

export default DialogsContainer;