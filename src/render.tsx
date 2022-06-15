import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {RoteStateType} from "./redux/state";

export let renderEntireTree = (state:RoteStateType)=>{

    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}