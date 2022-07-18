import {ActionsType} from "./store";

export type UsersType = {
    id: number
    name: string
    status: string
    followed: boolean
    uniqueUrlName: string
    photos: LocationType
}

type LocationType = {
    small: string
    large: string
}


const initialState: initialStateType = {
    users: []
}
 type initialStateType = {
     users: Array<UsersType>
 }

export type initialStateTypeUsers = typeof initialState

export const usersReducer = (state = initialState, action: ActionsType): initialStateTypeUsers => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id=== action.userID){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id=== action.userID){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case 'SET_USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}


export type followACType = {
    type: 'FOLLOW'
    userID: number
}
export type onfollowACType = {
    type: 'UNFOLLOW'
    userID: number
}
export type setUsersACType = {
    type: 'SET_USERS'
    users: Array<UsersType>
}

export const followAC = (userID: number): followACType => ({type: 'FOLLOW', userID})
export const onfollowAC = (userID: number): onfollowACType => ({type: 'UNFOLLOW', userID})
export const setUsersAC = (users:Array<UsersType>): setUsersACType => ({type: 'SET_USERS', users})