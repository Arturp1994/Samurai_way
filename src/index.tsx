import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 23},
    {id: 2, message: 'It is my first post', likesCount: 5},
    {id: 2, message: 'It is my first post', likesCount: 70},
]

let dialogs = [
    {id: 1, name: 'Artur'},
    {id: 2, name: 'Semen'},
    {id: 3, name: 'Vika'},
    {id: 4, name: 'Egor'},
    {id: 5, name: 'Denis'},
]

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Priv'},
    {id: 3, message: 'Hi'},
    {id: 4, message: 'By'},
]

ReactDOM.render(
    <App posts={posts} messages={messages} dialogs={dialogs}/>,
  document.getElementById('root')
);