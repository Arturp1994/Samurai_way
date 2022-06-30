import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import store, {StoreType} from "./redux/state";


type PropsType={
    store: StoreType
}
function App(props:PropsType) {
const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path={'/dialogs'} render={()=>
                        <Dialogs
                            dialogs={state.dialogsPage.dialogs}
                            messages={state.dialogsPage.messages}
                            dispatch={props.store.dispatch.bind(props.store)}
                            newMessageBody={props.store._state.dialogsPage.newMessageBody}
                        />}/>
                    <Route path={'/profile'} render={()=>
                        <Profile
                        changeNewText={props.store.changeNewText.bind(props.store)}//можно удалить
                        message={state.profilePage.newPostText}
                        posts={state.profilePage.posts}
                        addPost={props.store.addPost.bind(props.store)}//можно удалить
                        dispatch={props.store.dispatch.bind(props.store)}/>}
                    />

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;