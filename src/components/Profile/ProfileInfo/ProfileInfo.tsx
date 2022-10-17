import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/Profile-reducer";
import loader from "../../../assets/img/loading-13.gif";
import ProfileStatus from "./ProfileStatus";


type ProfileInfoProps={
    profile:ProfileType
    status:string
    updateStatus: (d:any)=>void
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
                {/*<img src={'https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png'}/>*/}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>

    )
}

export default ProfileInfo