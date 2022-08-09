import {combineReducers, legacy_createStore as createStore} from "redux"
import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./Users-reducer";
import {authReducer} from "./auth-reducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(rootReducer);

export type ReduxStoreType = typeof store

export default store

export type AppStateType = ReturnType<typeof rootReducer>