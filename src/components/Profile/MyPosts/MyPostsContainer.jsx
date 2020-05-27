import React from "react";
import MyPosts from "./MyPosts";
import {addPost} from "../../../redux/profileReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
};

export default connect(mapStateToProps, {addPost})(MyPosts);