import {ActionsType} from "./store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const initialState: initialStateType = {
    id: 1,
    email: '',
    login: '',
    isAuth: false
}

type initialStateType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

type DataType= {
    id: number
    email: string
    login: string
    isAuth: boolean
}

export type initialStateTypeUsers = typeof initialState

export const authReducer = (state = initialState, action: ActionsType): initialStateTypeUsers => {

    switch (action.type) {
        case 'SET_USER_DATE':
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}


export type SetUserDataType = {
    type: 'SET_USER_DATE'
    payload: DataType
}


export const setUserData = (id: number, email: string, login: string, isAuth: boolean): SetUserDataType => ({
    type: 'SET_USER_DATE',
    payload: {id, email, login, isAuth}
})

export const getAuthUserData =()=> (dispatch: Dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login}= response.data.data
            dispatch(setUserData(id, email, login, true))
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean)=> (dispatch: any) => {
    authAPI.login(email, password, rememberMe ).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    })
}

export const logout = ()=> (dispatch: any) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserData(1, '','', false))
        }
    })
}
