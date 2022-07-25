import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUsersProfile} from "../../redux/Profile-reducer";

type MapDispatchToPropsProfileType ={
    setUsersProfile: (d:any)=>void
}

type MapStateToPropsProfileType ={
    profile:ProfileType
}

export type ProfilePropsType = MapStateToPropsProfileType & MapDispatchToPropsProfileType

class ProfileContainer extends React.Component<ProfilePropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUsersProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
let mapStateToProps = (state: any)=>({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps,{setUsersProfile}) (ProfileContainer)