import React from "react";
import Profile from "./Profile";
import {getProfile} from "../../redux/profile_reducer";
import connect from "react-redux/lib/connect/connect";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId=2; //чисто заглушка на время

        this.props.getProfile(userId);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to='/login'/>;
        return (
            <Profile {...this.props} profile={this.props.profile}/> //прокидываем всё из mapStateToProps
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        profile: state.profilePage.profile, //теперь нужно прокинуть это в функцион компоненту в render
        isAuth: state.auth.isAuth
    }
};

let WithRouterProfileContainer = withRouter(ProfileContainer); //оборачивание компоненты в роут, для просмотра инф-и с браузерной строки
//оборачивается именно этот компонент, т.к. в его методе componentDidMount происходит ajax запрос, операющийся на данные url адреса польз-ля

export default connect (mapStateToProps, {getProfile})(WithRouterProfileContainer);
