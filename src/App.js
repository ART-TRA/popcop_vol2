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

import {BrowserRouter, Route} from "react-router-dom"; //необх импортировать модуль роутинга для работы с роутами

const App = () => {
  return (
      // тег необходим для использ-я роутинга (экранируем весь сайт единожды на высоком уровне)
      <BrowserRouter>
          <div className='app-wrap'>
              <Header/>
              <Navbar/>
              <div className='app-wrap_content'>
                  <Route path='/profile' component={Profile}/>
                  <Route path='/dialogs' component={Dialogs}/>
                  <Route path='/news' component={News}/>
                  <Route path='/music' component={Music}/>
                  <Route path='/gallery' component={Gallery}/>
                  <Route path='/settings' component={Settings}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
