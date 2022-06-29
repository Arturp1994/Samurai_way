export type StoreType = {
    _state: RoteStateType
    changeNewText: (newText: string) => void
    renderEntireTree: () => void
    addPost: () => void
    subscribe: (observer: any) => void
    getState: () => RoteStateType
    dispatch: (action: ActionsType) => void

}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 23},
                {id: 2, message: 'It is my first post', likesCount: 5},
                {id: 2, message: 'It is my first post', likesCount: 70},
            ],
            newPostText: ''

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
    },
    renderEntireTree() {
        console.log("State changed")
    },
    addPost() {
        let newPost = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this.renderEntireTree()
    },
    changeNewText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this.renderEntireTree()
    },
    subscribe(observer: any) {
        this.renderEntireTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost)
            this.renderEntireTree()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this.renderEntireTree()
        }
    }
}


type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likesCount: number

}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>

}
type SidebarType = {}

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

export type ActionsType = AddPostActionType | ChangeNewTextActionType

export default store
