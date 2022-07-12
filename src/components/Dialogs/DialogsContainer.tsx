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