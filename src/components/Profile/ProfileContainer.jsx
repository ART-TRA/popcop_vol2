import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile_reducer";
import connect from "react-redux/lib/connect/connect";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId=2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(responce =>{
            this.props.setUserProfile(responce.data);
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/> //прокидываем всё из mapStateToProps
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        profile: state.profilePage.profile //теперь нужно прокинуть это в функцион компоненту в render
    }
};

let WithRouterProfileContainer = withRouter(ProfileContainer); //оборачивание компоненты в роут, для просмотра инф-и с браузерной строки
//оборачивается именно этот компонент, т.к. в его методе componentDidMount происходит ajax запрос, операющийся на данные url адреса польз-ля

export default connect (mapStateToProps, {setUserProfile})(WithRouterProfileContainer);
