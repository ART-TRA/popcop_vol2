import React from "react";
import Profile from "./Profile";
import {getProfile} from "../../redux/profile_reducer";
import connect from "react-redux/lib/connect/connect";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId=2; //чисто заглушка на время

        this.props.getProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/> //прокидываем всё из mapStateToProps
        )
    }
}

const mapStateToProps = state => ({profile: state.profilePage.profile});

// compose позволяет последовательно оборачивать HOCs друг в друга
export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);


