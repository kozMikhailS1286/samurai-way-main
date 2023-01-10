import s from './Dialogs.module.css';
import React, {ChangeEvent} from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { DialogPageType, ActionsType, sendMessageAC, updateNewMessageBodyAC, StoreType } from './../../redux/state';


type DialogsType = {

    dispatch: (action: ActionsType) => void
    store: StoreType
}

const Dialogs = (props: DialogsType) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name} /> )
    let messagesElements = state.messages.map(m => <Message message={m.message} dispatch={props.dispatch} /> ) 
    let newMessageBody = state.newMessageBody;

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC());
    }

    const onNewMessageChange = () => {
        if (newMessageElement.current) {
           props.store.dispatch(updateNewMessageBodyAC(newMessageElement.current?.value))
        }
        // let body = e.target.value
        // props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div> <textarea ref={ newMessageElement }
                                    placeholder="Enter your message"
                                    value={props.store._state.dialogsPage.newMessageBody} 
                                    onChange={onNewMessageChange}> </textarea></div>
                    <div> <button onClick={onSendMessageClick}> Send </button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;