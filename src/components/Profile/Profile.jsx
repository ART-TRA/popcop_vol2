import React from "react";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts.module";

const Profile = (props)=>{
    return(
        <div>
            <ProfileInfo/>
            <MyPosts
                data_posts={props.state.posts}
                newPostText={props.state.newPostText}
                dispatch={props.dispatch}/>
        </div>
    )
};

export default Profile