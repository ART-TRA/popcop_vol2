import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./redux/state"; //импортируется без default, поэтому необх {}
import {updateNewPostText} from "./redux/state";
import {addMessage} from "./redux/state";
import {updateMessageText} from "./redux/state";

export let rerenderEntireTree = (state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 updateMessageText={updateMessageText}
                 addMessage={addMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};