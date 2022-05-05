import React from "react";
import { connect } from "react-redux";
import UserShow from "./user_show";
import { fetchUser } from "../../actions/user_actions";
import { fetchPost } from "../../actions/post_actions";

const mSTP = (state, ownProps) => {
  return {
    user: state.user,
    currentUser: state.session.currentUser
  }
}

const mDTP = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchPost: (postId) => dispatch(fetchPost(postId))
})


export default connect(mSTP, mDTP)(UserShow)