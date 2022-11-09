import React from 'react';
import {addPostActionCreator, PostType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    posts:Array<PostType>
    message: string
}
type mapDispatchToPropsType = {
    addPost: (newPostText:string)=>void
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
        addPost: (newPostText:string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)


export default MyPostsContainer