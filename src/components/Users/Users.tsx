import React from 'react';
import styles from "./users.module.css";
import {UsersType} from "../../redux/Users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumder: any) => void
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
}

let Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={props.currentPage === p ? styles.selected : ''}
                                     onClick={() => {
                                         props.onPageChanged(p)
                                     }}>{p}</span>
                    })}
                </div>
                {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : "/img/user.png"}
                             className={styles.usersPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button  disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {withCredentials: true, headers: {"API-KEY": "d8167f84-ee50-4314-a87a-bf1eeed700cf"}}).then(response => {
                                    if (response.data.resultCode === 0){
                                        props.unfollow(u.id)
                                    }
                                    props.toggleIsFollowingProgress(false, u.id)
                                })

                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true, headers: {"API-KEY": "d8167f84-ee50-4314-a87a-bf1eeed700cf"}}).then(response => {
                                    if (response.data.resultCode === 0){
                                        props.follow(u.id)
                                    }
                                    props.toggleIsFollowingProgress(false, u.id)
                                })


                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)}
            </div>

        )
    )
}


export default Users