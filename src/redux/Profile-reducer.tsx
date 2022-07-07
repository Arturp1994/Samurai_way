import {ActionsType, PostType, ProfilePageType} from "./store";


const initialState= {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 23},
        {id: 2, message: 'It is my first post', likesCount: 5},
        {id: 2, message: 'It is my first post', likesCount: 70},
    ] as Array<PostType>,
    newPostText: ''
}

export type initialStateType = typeof initialState

export const profileReducer = (state = initialState, action: ActionsType):initialStateType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost)
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default: return state;
    }

}