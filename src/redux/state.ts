import {renderEntireTree} from "../render";


type MessageType={
    id: number
    message: string
}
type DialogType={
    id: number
    name: string
}
type PostType={
    id: number
    message: string
    likesCount: number

}
type ProfilePageType={
    posts:Array<PostType>
}
type DialogsPageType={
    messages: Array<MessageType>
    dialogs: Array<DialogType>

}
type SidebarType ={}

export type RoteStateType={
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType


}

let state: RoteStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 23},
            {id: 2, message: 'It is my first post', likesCount: 5},
            {id: 2, message: 'It is my first post', likesCount: 70},
        ],

    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Priv'},
            {id: 3, message: 'Hi'},
            {id: 4, message: 'By'},
        ],
        dialogs: [
            {id: 1, name: 'Artur'},
            {id: 2, name: 'Semen'},
            {id: 3, name: 'Vika'},
            {id: 4, name: 'Egor'},
            {id: 5, name: 'Denis'},
        ],
    },
    sidebar: {}
}

export let addPost =(postMessage:string)=>{
    let newPost ={
        id: new Date().getTime(),
        message: postMessage,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}


export default state
