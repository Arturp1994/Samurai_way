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
        case 'ADD-POST': {
            let newPost = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0,
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            return stateCopy;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default: return state;
    }

}