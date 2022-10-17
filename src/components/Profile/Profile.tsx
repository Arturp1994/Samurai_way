import React, {ReactNode} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/Profile-reducer";


const Profile = (props: { children?: ReactNode, profile:ProfileType, status:string, updateStatus:(d:any)=>void }) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status = {props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>

    )
}

export default Profile