import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile, ProfileType, } from "../../redux/Profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type ParhParamsType={
    userId: string
}


type MapDispatchToPropsProfileType ={
    getUsersProfile: (d:any)=>void
}

type MapStateToPropsProfileType ={
    profile:ProfileType
}

type PropsType = RouteComponentProps<ParhParamsType> & ProfilePropsType

export type ProfilePropsType = MapStateToPropsProfileType & MapDispatchToPropsProfileType

class ProfileContainer extends React.Component<PropsType>{

    componentDidMount() {
        let userId=this.props.match.params.userId
        if (!userId){
            userId='2'
        }
        this.props.getUsersProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: any): MapStateToPropsProfileType=>({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{getUsersProfile}) (withUrlDataContainerComponent)