import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
// import connect from "react-redux/lib/connect/connect";


//чтобы не дублировать connect в компонентах и isAuth в state
const mapStateToPropsForRedirect = state => ({
  isAuth: state.auth.isAuth
});

//HOC - high order component, осущ однотипные действия (один или неск-ко методов) для разных компонентов
export const withAuthRedirect = (Component) =>{ //принимает в себя компонент
  class RedirectComponent extends React.Component {
      render() {
          if(!this.props.isAuth) return <Redirect to='/login'/>; //единая логика
          return <Component {...this.props}/>
      }
  }
  let ConnectRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
  return ConnectRedirectComponent;
};