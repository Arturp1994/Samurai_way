import React from 'react';
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";


const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Button</button>
            </div>
            <div className={s.posts}>
                <Posts message = {"Hi, how are you?"} likesCount={23}/>
                <Posts message = {"It is my first post"} likesCount={5}/>
            </div>
        </div>

    )
}

export default MyPosts