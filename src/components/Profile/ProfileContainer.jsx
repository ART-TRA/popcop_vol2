import React from "react";
import Profile from "./Profile";
import {getProfile} from "../../redux/profile_reducer";
import connect from "react-redux/lib/connect/connect";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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

//компонента осуществл редирект на авторизацию
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
let WithRouterProfileContainer = withRouter(AuthRedirectComponent); //оборачивание компоненты в роут, для просмотра инф-и с браузерной строки
//оборачивается именно этот компонент, т.к. в его методе componentDidMount происходит ajax запрос, операющийся на данные url адреса польз-ля

const mapStateToProps = (state) => ({profile: state.profilePage.profile});
export default connect (mapStateToProps, {getProfile})(WithRouterProfileContainer);
