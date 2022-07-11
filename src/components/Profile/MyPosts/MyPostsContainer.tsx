import React from 'react';
import {addPostActionCreator, PostType, UpdateNewPostTextActionCreator} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

//
// const MyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const state = store.getState()
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator(state.profilePage.newPostText))
//                     store.dispatch(UpdateNewPostTextActionCreator(""))
//
//                 }
//
//                 let onPostChange = (text: string) => {
//                     let action = UpdateNewPostTextActionCreator(text);
//                     store.dispatch(action)
//                 }
//                 return <MyPosts changeNewText={onPostChange}
//                                 addPost={addPost}
//                                 message={state.profilePage.newPostText}
//                                 posts={state.profilePage.posts}/>
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }



type MapStateToPropsType = {
    posts:Array<PostType>
    message: string
}
type mapDispatchToPropsType = {
    changeNewText: (text: string)=> void
    addPost: ()=>void
}
export type MyPostsProrsType = MapStateToPropsType & mapDispatchToPropsType



const mapStateToProps = (state: AppStateType): MapStateToPropsType=>{
    return {
        posts: state.profilePage.posts,
        message: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType=>{
    return{
        changeNewText: (text: string)=>{
            let action = UpdateNewPostTextActionCreator(text);
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
            dispatch(UpdateNewPostTextActionCreator(""))

        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)


export default MyPostsContainer