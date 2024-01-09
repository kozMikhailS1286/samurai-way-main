import s from './Dialogs.module.css';
import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {DialogPageType} from "../../redux/store";
import {Field, reduxForm} from "redux-form";


type DialogsType = {
    updateNewMessageBodyAC: (body: string) => void
    sendMessage: (newMessageBody: string) => void
    dialogsPage: DialogPageType
    isAuth: boolean
}

const Dialogs = (props: DialogsType) => {

    console.log(props)
    let state = props.dialogsPage

    console.log(state)
    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} /> )
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} /> )


    // if (!props.isAuth) return <Redirect to={"/login"}/>

    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody);
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
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newMessageBody" component="textarea" placeholder="Enter you message" />
            </div>
            <div>
                <button> send </button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;