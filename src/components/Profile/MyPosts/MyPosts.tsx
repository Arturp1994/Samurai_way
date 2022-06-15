import React from 'react';
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";

export type MyPostsProps={
    posts: Array<{id:number, message: string, likesCount:number}>
    addPost: (postMessage:string)=>void
}


const MyPosts = (props: MyPostsProps) => {


let posptsElement = props.posts.map(p=> <Posts message = {p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost= ()=>{
        if (newPostElement.current){
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = " "
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Button</button>
            </div>
            <div className={s.posts}>
                {posptsElement}
            </div>
        </div>

    )
}

export default MyPosts