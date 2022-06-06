import React from 'react';
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";

export type MyPostsProps={
    posts: Array<{id:number, message: string, likesCount:number}>
}


const MyPosts = (props: MyPostsProps) => {

    // let posts = [
    //     {id: 1, message: 'Hi, how are you?', likesCount: 23},
    //     {id: 2, message: 'It is my first post', likesCount: 5},
    // ]

let posptsElement = props.posts.map(p=> <Posts message = {p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Button</button>
            </div>
            <div className={s.posts}>
                {posptsElement}
            </div>
        </div>

    )
}

export default MyPosts