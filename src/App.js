import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Gallery from "./components/Gallery/Gallery";
import Settings from "./components/Settings/Settings";

import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
  return (
      <BrowserRouter>
          <div className='app-wrap'>
              <HeaderContainer/>
              <Navbar/>
              <div className='app-wrap_content'>
                  <Route path='/profile/:userId?' render={()=><ProfileContainer/>}/>

                  <Route path='/dialogs' render={()=><DialogsContainer/>}/>
                  <Route path='/users' render={()=><UsersContainer/>}/>

                  <Route path='/news' render={()=><News
                      state={props.state.newsPage}
                      dispatch={props.dispatch}/>}/>

                  <Route path='/music' component={Music}/>
                  <Route path='/gallery' component={Gallery}/>
                  <Route path='/settings' component={Settings}/>
                  <Route path='/login' render={()=><Login/>}/>
              </div>
          </div>
      </BrowserRouter>
  );
};

export default App;
