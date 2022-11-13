import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUsersProfile, ProfileType, updateStatus,} from "../../redux/Profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type ParhParamsType = {
    userId: string
}

type MapDispatchToPropsProfileType = {
    getUsersProfile: (d: any) => void
    getStatus:(d: any) => void
    updateStatus:(d: any) => void
}

type MapStateToPropsProfileType = {
    profile: ProfileType
    status: string
    authorizedUserId: string
    isAuth: boolean

}

export type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

type PropsType = RouteComponentProps<ParhParamsType> & ProfilePropsType

export type ProfilePropsType = MapStateToPropsProfileType & MapDispatchToPropsProfileType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUsersProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status = {this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state: any): MapStateToPropsProfileType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer)