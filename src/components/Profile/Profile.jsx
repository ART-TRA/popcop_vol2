import React from "react";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts.module";

// const postsDada = [
//     {message: "Seydoux", likes: 7},
//     {message: "Reedus", likes: 4},
//     {message: "Mikkelson", likes: 6},
// ]

const Profile = (props)=>{
    return(
        <div>
            <ProfileInfo/>
            <MyPosts data_posts={props.data}/>
        </div>
    )
}

export default Profile