import {ActionsType, PostType} from "./store";


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
            return {
                ...state,
                posts: [...state.posts, newPost]}
            };


        case 'UPDATE-NEW-POST-TEXT': {
            return {...state,
                newPostText: action.newText}
            }

        default: return state;
    }

}