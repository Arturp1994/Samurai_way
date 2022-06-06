import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";



type AppProps={
    posts: Array<{id:number, message: string, likesCount:number}>
    dialogs: Array<{id: number, name: string}>
    messages: Array<{id: number, message: string}>
}

function App(props: AppProps) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path={'/dialogs'} render={()=><Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path={'/profile'} render={()=><Profile posts={props.posts}/>}/>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;