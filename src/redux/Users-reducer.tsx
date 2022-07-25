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
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

 type initialStateType = {
     users: Array<UsersType>
     pageSize: number
     totalUsersCount: number
     currentPage:number
     isFetching: boolean

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
            return {...state, users: action.users}
        }
        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET_TOTAL_USERS_COUNT': {
            return {...state, totalUsersCount: action.count}
        }
        case 'TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
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
export type setCurrentPageACType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
export type setTotalUsersCountACType = {
    type: 'SET_TOTAL_USERS_COUNT'
    count: number
}

export type toggleIsFetchingACACType = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}


export const followAC = (userID: number): followACType => ({type: 'FOLLOW', userID})
export const onfollowAC = (userID: number): onfollowACType => ({type: 'UNFOLLOW', userID})
export const setUsersAC = (users:Array<UsersType>): setUsersACType => ({type: 'SET_USERS', users})
export const setCurrentPageAC = (currentPage:number): setCurrentPageACType => ({type: 'SET_CURRENT_PAGE', currentPage})
export const setTotalUsersCountAC = (totalUsersCount:number): setTotalUsersCountACType => ({type: 'SET_TOTAL_USERS_COUNT', count:totalUsersCount})
export const toggleIsFetchingAC = (isFetching:boolean): toggleIsFetchingACACType => ({type: 'TOGGLE_IS_FETCHING', isFetching})