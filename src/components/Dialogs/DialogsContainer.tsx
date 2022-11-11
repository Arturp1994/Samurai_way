import React from "react";
import {
    DialogsPageType,
    sendMessageCreator,
} from "../../redux/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



type MapStateToPropsDialogType={
    dialogsPage:DialogsPageType
    isAuth: boolean
}

type MapDispatchToPropsType={
    sendMessage: (newMessageBody: string)=>void
}

export type DialogsPropsType = MapStateToPropsDialogType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsDialogType=>{
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType=>{

    return{
        sendMessage: (newMessageBody: string)=>{
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}


export default compose <React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)