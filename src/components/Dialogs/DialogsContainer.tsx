import React from 'react'
import { sendMessageAC, updateNewMessageBodyAC } from './../../redux/dialogs-reducer';
import { ActionsType, StoreType } from '../../redux/store'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



let mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBodyAC: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC());
        }
    }
}

const DialogsContainer = withAuthRedirect(compose<React.FC>(connect(mapStateToProps, mapDispatchToProps))(Dialogs));

export default DialogsContainer;