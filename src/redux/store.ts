import {profileReducer, setUsersProfileACType} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {
    followACType,
    onfollowACType,
    setCurrentPageACType,
    setTotalUsersCountACType,
    setUsersACType, toggleIsFetchingAC, toggleIsFetchingACACType, toggleIsFollovingProgressACType
} from "./Users-reducer";
import {SetUserDataType} from "./auth-reducer";

export type StoreType = {
    _state: RoteStateType
    changeNewText: (newText: string) => void
    renderEntireTree: () => void
    addPost: () => void
    subscribe: (observer: any) => void
    getState: () => RoteStateType
    dispatch: (action: ActionsType) => void

}

// let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi, how are you?', likesCount: 23},
//                 {id: 2, message: 'It is my first post', likesCount: 5},
//                 {id: 2, message: 'It is my first post', likesCount: 70},
//             ],
//             newPostText: ''
//
//         },
//         dialogsPage: {
//             messages: [
//                 {id: 1, message: 'Hello'},
//                 {id: 2, message: 'Priv'},
//                 {id: 3, message: 'Hi'},
//                 {id: 4, message: 'By'},
//             ],
//             dialogs: [
//                 {id: 1, name: 'Artur'},
//                 {id: 2, name: 'Semen'},
//                 {id: 3, name: 'Vika'},
//                 {id: 4, name: 'Egor'},
//                 {id: 5, name: 'Denis'},
//             ],
//             newMessageBody: ""
//         },
//         sidebar: {}
//     },
//     renderEntireTree() {
//         console.log("State changed")
//     },
//     addPost() {
//         let newPost = {
//             id: new Date().getTime(),
//             message: this._state.profilePage.newPostText,
//             likesCount: 0,
//         }
//         this._state.profilePage.posts.push(newPost)
//         this.renderEntireTree()
//     },
//     changeNewText(newText: string) {
//         this._state.profilePage.newPostText = newText;
//         this.renderEntireTree()
//     },
//     subscribe(observer: any) {
//         this.renderEntireTree = observer
//     },
//     getState() {
//         return this._state
//     },
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this.renderEntireTree();
//
//     }
// }

export const addPostActionCreator = (newPostText:string):AddPostActionType =>{
    return {
        type: "ADD-POST",
        newPostText
    }
}

export const UpdateNewPostTextActionCreator = (text: string):ChangeNewTextActionType =>{
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
}

export const sendMessageCreator = (newMessageBody:string):SendMessagePostActionType =>{
    return {
        type: 'SEND_MESSAGE',
        newMessageBody
    }
}



export type MessageType = {
    id: number
    message: string
}
export  type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number

}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>

}
export type SidebarType = {}

export type RoteStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType

}

type AddPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}

type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type UpdateNewMessagePostActionType = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    body: string
}
type SendMessagePostActionType = {
    type: 'SEND_MESSAGE'
    newMessageBody: string
}
export type SetStatusAC = {
    type: 'SET_STATUS'
    status: string
}
export type ActionsType = AddPostActionType |
    ChangeNewTextActionType |
    UpdateNewMessagePostActionType |
    SendMessagePostActionType |
    followACType |
    onfollowACType |
    setUsersACType |
    setCurrentPageACType |
    setTotalUsersCountACType |
    toggleIsFetchingACACType |
    setUsersProfileACType |
    SetUserDataType |
    toggleIsFollovingProgressACType |
    SetStatusAC


// export default store
