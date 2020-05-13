import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//массивы с данными по польз-лям и сообщениям и постами
const dialogsData = [
    {id: "1", name:"Seydoux"},
    {id: "2", name:"Reedus"},
    {id: "3", name:"Mikkelsen"},
    {id: "4", name:"Qualley"},
    {id: "5", name:"DelToro"}
]

const messagesData= [
    {id: "1", text:"Freeze"},
    {id: "2", text:"You're busted buddy!"},
    {id: "3", text:"I'm a cop"},
]

const postsDada = [
    {message: "Seydoux", likes: 7},
    {message: "Reedus", likes: 4},
    {message: "Mikkelson", likes: 6},
]

ReactDOM.render(
  <React.StrictMode>
    <App data={postsDada} messages={messagesData} dialogs={dialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
