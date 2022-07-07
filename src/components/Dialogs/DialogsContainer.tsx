import React from "react";
import {
    sendMessageCreator,
    updateNewMessageCreator
} from "../../redux/store";
import {ReduxStoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";


type DialogsPropsType = {
    store: ReduxStoreType
}


const DialogsContainer = (props: DialogsPropsType) => {
    const state = props.store.getState().dialogsPage

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator(newMessageBody))
    }
    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageCreator(body))
    }

    return <Dialogs updateNewMessage={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
}

export default DialogsContainer