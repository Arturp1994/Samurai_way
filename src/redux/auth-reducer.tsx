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
}

export type initialStateTypeUsers = typeof initialState

export const authReducer = (state = initialState, action: ActionsType): initialStateTypeUsers => {

    switch (action.type) {
        case 'SET_USER_DATE':
            return {
                ...state,
                ...action.data,
                isAuth:true
            }

        default:
            return state
    }
}


export type SetUserDataType = {
    type: 'SET_USER_DATE'
    data: DataType
}


export const setUserData = (id: number, email: string, login: string): SetUserDataType => ({
    type: 'SET_USER_DATE',
    data: {id, email, login}
})

export const getAuthUserData =()=> (dispatch: Dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login}= response.data.data
            dispatch(setUserData(id, email, login))
        }
    })
}
