import s from './Dialogs.module.css';
import React, {ChangeEvent} from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {DialogPageType} from "../../redux/store";


type DialogsType = {
    updateNewMessageBodyAC: (body: string) => void
    sendMessage: () => void
    dialogPage: DialogPageType
}

const Dialogs = (props: DialogsType) => {

    let state = props.dialogPage

    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name} /> )
    let messagesElements = state.messages.map(m => <Message message={m.message} /> )

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    const onSendMessageClick = () => {
        props.sendMessage();
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        body && props.updateNewMessageBodyAC(body)
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
                                    value={props.dialogPage.newMessageBody}
                                    onChange={onNewMessageChange}> </textarea></div>
                    <div> <button onClick={onSendMessageClick}> Send </button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;