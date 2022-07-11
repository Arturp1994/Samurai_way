import React from "react";
import {
    DialogsPageType,
    sendMessageCreator,
    updateNewMessageCreator
} from "../../redux/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


//
// const DialogsContainer = () => {
//
//
//     return <StoreContext.Consumer>
//         {(store) => {
//             const state = store.getState().dialogsPage
//
//             let newMessageBody = state.newMessageBody
//
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator(newMessageBody))
//             }
//             let onNewMessageChange = (body: string) => {
//                 store.dispatch(updateNewMessageCreator(body))
//             }
//
//             return <Dialogs updateNewMessage={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
//         }
//         }
//         </StoreContext.Consumer>
//
// }

type MapStateToPropsType={
    dialogsPage:DialogsPageType
}

type MapDispatchToPropsType={
    updateNewMessage: (body: string)=> void
    sendMessage: ()=>void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType=>{
    return{
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType=>{

    return{
        updateNewMessage: (body: string)=>{
            dispatch(updateNewMessageCreator(body))
        },
        sendMessage: ()=>{
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer