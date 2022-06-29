import React from 'react';
import s from './Profile.module.css'
import MyPosts, {MyPostsProps} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props: MyPostsProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                changeNewText={props.changeNewText} //можно удалить
                message={props.message}
                posts={props.posts}
                addPost={props.addPost} //можно удалить
                dispatch={props.dispatch}
            />
        </div>

    )
}

export default Profile