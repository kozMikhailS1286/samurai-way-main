import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

type PropsDialogItemType = {
    name: string
    id: string
}

const DialogItem = (props: PropsDialogItemType) => {
    let path = "/dialogs/1" + props.id;
    return (
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}> {props.name} </NavLink>
            </div>
    );
}

type PropsMessageType = {
    message: string
}

const Message = (props: PropsMessageType) => {
    return (
        <div className={s.dialog}> {props.message} </div>
    );
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
        <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Victor" id="5"/>
                <DialogItem name="Valera" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is yout it-kamasutra?"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
            </div>
        </div>
    );
}

export default Dialogs;