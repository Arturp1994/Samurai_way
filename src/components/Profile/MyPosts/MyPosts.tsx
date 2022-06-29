import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {ActionsType} from "../../../redux/state";

export type MyPostsProps = {
    posts: Array<{ id: number, message: string, likesCount: number }>
    addPost: (postMessage: string) => void
    message: string
    changeNewText: (newText: string) => void
    dispatch: (action:ActionsType)=>void
}


const MyPosts = (props: MyPostsProps) => {


    let posptsElement = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)


    let addPost = () => {
        props.dispatch({type: "ADD-POST", newPostText: props.message})
        props.dispatch({type:'UPDATE-NEW-POST-TEXT' , newText: ""})

    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.dispatch({type:'UPDATE-NEW-POST-TEXT' , newText: text})
    }


    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea value={props.message} onChange={onPostChange}></textarea>
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