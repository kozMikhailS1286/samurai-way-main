import s from './../Dialogs.module.css';
import { ActionsType } from '../../../redux/store';

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.dialog}> {props.message} </div>
    );
}


export default Message;