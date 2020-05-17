import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Gallery from "./components/Gallery/Gallery";
import Settings from "./components/Settings/Settings";

import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
  return (
      <BrowserRouter>
          <div className='app-wrap'>
              <Header/>
              <Navbar/>
              <div className='app-wrap_content'>
                  <Route path='/profile' render={()=><Profile
                      state={props.state.profilePage}
                      dispatch={props.dispatch}/>}/>

                  <Route path='/dialogs' render={()=><Dialogs
                      state={props.state.messagesPage}
                      dispatch={props.dispatch}/>}/>

                  <Route path='/news' render={()=><News
                      state={props.state.newsPage}
                      dispatch={props.dispatch}/>}/>

                  <Route path='/music' component={Music}/>
                  <Route path='/gallery' component={Gallery}/>
                  <Route path='/settings' component={Settings}/>
              </div>
          </div>
      </BrowserRouter>
  );
};

export default App;
