import {ActionsType} from "./store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";


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
    isFetching: true,
    followingInProgress: []
}

 type initialStateType = {
     users: Array<UsersType>
     pageSize: number
     totalUsersCount: number
     currentPage:number
     isFetching: boolean
     followingInProgress: Array<number>

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
        case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {...state,
                followingInProgress: action.isFetching
                    ?  [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id=>id!=action.userId)
            }
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

export type toggleIsFollovingProgressACType = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    isFetching: boolean
    userId:number
}


export const followSuccesAC = (userID: number): followACType => ({type: 'FOLLOW', userID})
export const onfollowSuccesAC = (userID: number): onfollowACType => ({type: 'UNFOLLOW', userID})
export const setUsersAC = (users:Array<UsersType>): setUsersACType => ({type: 'SET_USERS', users})
export const setCurrentPageAC = (currentPage:number): setCurrentPageACType => ({type: 'SET_CURRENT_PAGE', currentPage})
export const setTotalUsersCountAC = (totalUsersCount:number): setTotalUsersCountACType => ({type: 'SET_TOTAL_USERS_COUNT', count:totalUsersCount})
export const toggleIsFetchingAC = (isFetching:boolean): toggleIsFetchingACACType => ({type: 'TOGGLE_IS_FETCHING', isFetching})
export const toggleIsFollowingProgressAC = (isFetching:boolean, userId:number): toggleIsFollovingProgressACType => ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId})

export const getUsersThunkCreator = (currentPage: number, pageSize: number)=> {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetchingAC(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUsersCountAC(data.totalCount))
        })
    }
}

export const follow = (userId: number)=> {

    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgressAC(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(followSuccesAC(userId))
                }
                dispatch(toggleIsFollowingProgressAC(false, userId))
            })

    }
}

export const unfollow = (userId: number)=> {

    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgressAC(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(onfollowSuccesAC(userId))
                }
                dispatch(toggleIsFollowingProgressAC(false, userId))
            })

    }
}