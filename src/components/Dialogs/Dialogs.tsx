import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { PostType, DialogsType, MessagesType } from './../../index';


type PropsMessageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

const Dialogs = (props: PropsMessageType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name} /> )
    let messagesElements = props.messages.map(m => <Message message={m.message} /> ) 

    return (
        <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;