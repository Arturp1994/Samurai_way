import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";


let renderEntireTree = ()=>{

    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}

store.subscribe(renderEntireTree)
renderEntireTree()




