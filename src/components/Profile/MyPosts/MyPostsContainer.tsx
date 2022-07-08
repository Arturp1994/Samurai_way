import React from 'react';
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/store";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContecst";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostActionCreator(state.profilePage.newPostText))
                    store.dispatch(UpdateNewPostTextActionCreator(""))

                }

                let onPostChange = (text: string) => {
                    let action = UpdateNewPostTextActionCreator(text);
                    store.dispatch(action)
                }
                return <MyPosts changeNewText={onPostChange}
                                addPost={addPost}
                                message={state.profilePage.newPostText}
                                posts={state.profilePage.posts}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer