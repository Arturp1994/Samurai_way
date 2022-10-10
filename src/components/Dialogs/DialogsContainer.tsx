import React from "react";
import {
    DialogsPageType,
    sendMessageCreator,
    updateNewMessageCreator
} from "../../redux/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateToPropsType={
    dialogsPage:DialogsPageType
    isAuth: boolean

}
type MapStateToPropsDialogType={
    dialogsPage:DialogsPageType
}

type MapDispatchToPropsType={
    updateNewMessage: (body: string)=> void
    sendMessage: ()=>void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsDialogType=>{
    return{
        dialogsPage: state.dialogsPage,
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


export default compose <React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)