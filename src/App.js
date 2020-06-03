import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Gallery from "./components/Gallery/Gallery";
import Settings from "./components/Settings/Settings";

import {BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";



import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux_store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initApp();
    }

    render() {
        let Background = "https://i.playground.ru/p/SCfJ19mum0SsgDhAN1jALA.jpeg";
        if (!this.props.init) {
            return <Preloader/>
        }
        return (
            <div className='app'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrap_content'>
                    <div className="bg_img" style={{backgroundImage: `url(${Background})`}}/>

                    {/*можно сделать так, оборачивать HOC-ом каждую компоненту
                    <Route path='/profile/:userId?' render={() => withSuspense(<ProfileContainer/>)}/>*/}

                    {/*но лучше так сделать*/}
                    <React.Suspense fallback={<div><Preloader/></div>}>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    </React.Suspense>


                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News
                        state={this.props.state.newsPage}
                        dispatch={this.props.dispatch}/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/gallery' component={Gallery}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    init: state.app.init
});

let AppContainer = compose(
    connect(mapStateToProps, {initApp}),
    withRouter,
)(App);

const MainApp = () => {
    return (
        <BrowserRouter> {/*BrowserRouter и Provider используют контекст, чтобы прокинуть store и все настройки внутрь*/}
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
};

export default MainApp;
