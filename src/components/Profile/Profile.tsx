import React, {ReactNode} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/Profile-reducer";


const Profile = (props: { children?: ReactNode, profile:ProfileType }) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>

    )
}

export default Profile