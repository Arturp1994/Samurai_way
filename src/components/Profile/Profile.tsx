import React from 'react';
import s from './Profile.module.css'
import MyPosts, {MyPostsProps} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 23},
    {id: 2, message: 'It is my first post', likesCount: 5},
]

const Profile = (props: MyPostsProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>

    )
}

export default Profile