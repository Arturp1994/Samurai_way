import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, onfollowAC, setUsersAC, UsersType} from "../../redux/Users-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";



type MapStateToPropsType={
    users:Array<UsersType>
}
type MapDispatchToPropsType={
    follow: (userId: number)=> void
    unfollow: (userId: number)=>void
    setUsers: (users: Array<UsersType>)=>void
}

export type UserPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType=>{
    return{
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType=>{
    return{
        follow: (userId: number) =>{
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) =>{
            dispatch(onfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>)=>{
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)