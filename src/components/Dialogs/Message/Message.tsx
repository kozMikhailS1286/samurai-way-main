import s from './../Dialogs.module.css';
import { ActionsType } from './../../../redux/state';

type MessagePropsType = {
    message: string
    dispatch: (action: ActionsType) => void
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.dialog}> {props.message} </div>
    );
}


export default Message;