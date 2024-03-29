import React from 'react';
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {MyPostsProrsType} from "./MyPostsContainer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validator/validator";
import {Textarea} from "../../common/FormControls/FormsControl";

// export type MyPostsProps = {
//     posts: Array<{ id: number, message: string, likesCount: number }>
//     addPost: (postMessage: string) => void
//     message: string
//     changeNewText: (newText: string) => void
//
// }



const MyPosts = (props: MyPostsProrsType) => {


    let posptsElement = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)


    let onAddPost = (value:any) => {
        props.addPost(value.newPostText)

    }

    return (

        <div className={s.postsBlock}>
            <h3>My post</h3>
            <AddNewPostFormSummit onSubmit={onAddPost}/>
            <div className={s.posts}>
                {posptsElement}
            </div>
        </div>


    )
}

const maxLength10 = maxLengthCreator(10)

const addNewPostForm = (props:any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea} validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormSummit = reduxForm({form: "ProfileAddNewPostForm"})(addNewPostForm)

export default MyPosts