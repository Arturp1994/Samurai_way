import {ActionsType, PostType, SetStatusAC} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";


const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 23},
        {id: 2, message: 'It is my first post', likesCount: 5},
        {id: 2, message: 'It is my first post', likesCount: 70},
    ] as Array<PostType>,
    newPostText: '',
    profile: {
        aboutMe: "я круто чувак 1001%",
        contacts: {
            facebook: "facebook.com",
            website: "facebook.com",
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagra.com/sds",
            youtube: "facebook.com",
            github: "github.com",
            mainLink: "facebook.com",
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        userId: 5,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
    status: ''
}

export type initialStateType = typeof initialState

export const profileReducer = (state = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }

        case 'SET_STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }

}

export type setUsersProfileACType = {
    type: 'SET_USER_PROFILE'
    profile: ProfileType

}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
type PhotosType = {
    small: string
    large: string
}
export const setUsersProfile = (profile: ProfileType): setUsersProfileACType => ({type: 'SET_USER_PROFILE', profile})
export const setStatus = (status: string): SetStatusAC => ({type: 'SET_STATUS', status})

export const getUsersProfile = (userID:string)=>(dispatch: Dispatch)=> {
    usersAPI.getProfile(userID).then(response => {
        dispatch(setUsersProfile(response.data))
    })
}

export const getStatus = (userID:string)=>(dispatch: Dispatch)=> {
    profileAPI.getStatus(userID).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status:string)=>(dispatch: Dispatch)=> {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0){
            dispatch(setStatus(status))
        }
    })
}