import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {MyPostsProrsType} from "./MyPostsContainer";

// export type MyPostsProps = {
//     posts: Array<{ id: number, message: string, likesCount: number }>
//     addPost: (postMessage: string) => void
//     message: string
//     changeNewText: (newText: string) => void
//
// }

const MyPosts = (props: MyPostsProrsType) => {


    let posptsElement = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)


    let onAddPost = () => {
        // props.addPost(props.message)
        props.addPost()

    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.changeNewText(text)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea value={props.message} onChange={onPostChange}></textarea>
            </div>
            <div>
                <button onClick={onAddPost}>Button</button>
            </div>
            <div className={s.posts}>
                {posptsElement}
            </div>
        </div>

    )
}

export default MyPosts