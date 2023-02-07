import React from 'react'
import { sendMessageAC, updateNewMessageBodyAC } from './../../redux/dialogs-reducer';
import { ActionsType, StoreType } from '../../redux/store'
import Dialogs from "./Dialogs";
import { StoreContext } from '../../StoreContext';



// type DialogsType = {
//     store: StoreType
// }

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageAC());
                    }

                    const onNewMessageChange = (body: string) => {
                        store.dispatch(updateNewMessageBodyAC(body))
                    }

                    return <Dialogs updateNewMessageBodyAC={onNewMessageChange}
                                    sendMessage={onSendMessageClick}
                                    dialogPage={store.getState().dialogsPage}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;