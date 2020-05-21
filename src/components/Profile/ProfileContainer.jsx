import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile_reducer";
import connect from "react-redux/lib/connect/connect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2").then(responce =>{
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

export default connect (mapStateToProps, {setUserProfile})(ProfileContainer);
