import React from 'react';
import styles from './users.module.css'
import {UserPropsType} from "./UsersContainer";

const Users = (props: UserPropsType) => {

if(props.users.length===0) {
    props.setUsers(
        [
            {
                id: 1,
                followed: true,
                photoURL: 'https://i.eurosport.com/2019/12/15/2736950-56561010-2560-1440.jpg',
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                followed: true,
                photoURL: 'https://i.eurosport.com/2019/12/15/2736950-56561010-2560-1440.jpg',
                fullName: 'Vika',
                status: 'I am a boss',
                location: {city: 'Vitebsk', country: 'Belarus'}
            },
            {
                id: 3,
                followed: false,
                photoURL: 'https://i.eurosport.com/2019/12/15/2736950-56561010-2560-1440.jpg',
                fullName: 'Lena',
                status: 'I am a boss',
                location: {city: 'Grodno', country: 'Belarus'}
            },
            {
                id: 4,
                photoURL: 'https://i.eurosport.com/2019/12/15/2736950-56561010-2560-1440.jpg',
                followed: true,
                fullName: 'Vera',
                status: 'I am a boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ]
    )
}
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>

    )
}

export default Users