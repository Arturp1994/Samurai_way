import React from "react";
import {
    sendMessageCreator,
    updateNewMessageCreator
} from "../../redux/store";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContecst";



const DialogsContainer = () => {


    return <StoreContext.Consumer>
        {(store) => {
            const state = store.getState().dialogsPage

            let newMessageBody = state.newMessageBody

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator(newMessageBody))
            }
            let onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageCreator(body))
            }

            return <Dialogs updateNewMessage={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
        }
        }
        </StoreContext.Consumer>

}

export default DialogsContainer