import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/Profile-reducer";
import loader from "../../../assets/img/loading-13.gif";
import ProfileStatus from "./ProfileStatus";


type ProfileInfoProps={
    profile:ProfileType
}

const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile){
        return <div><img width={50} height={50} src={loader}/></div>
    }

    return (
        <div >
            {/*<div>*/}
            {/*    <img*/}
            {/*        src='https://media.cnn.com/api/v1/images/stellar/prod/220522123743-03-liverpool-wolves-premier-league-0522.jpg?c=16x9&q=h_720,w_1280,c_fill'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={"Hello"}/>
            </div>

        </div>

    )
}

export default ProfileInfo