import React from 'react';
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {ReduxStoreType} from "../../../redux/redux-store";


export type MyPostsContainerPropsType={
    store: ReduxStoreType
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    const state = props.store.getState()


    let addPost = () => {
        props.store.dispatch(addPostActionCreator(state.profilePage.newPostText))
        props.store.dispatch(UpdateNewPostTextActionCreator(""))

    }

    let onPostChange = (text: string) => {
        let action = UpdateNewPostTextActionCreator(text);
        props.store.dispatch(action)
    }


    return <MyPosts changeNewText={onPostChange}
                    addPost={addPost}
                    message={state.profilePage.newPostText}
                    posts={state.profilePage.posts}/>
}

export default MyPostsContainer