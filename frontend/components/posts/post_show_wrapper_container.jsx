import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../../actions/post_actions";
import PostShowWrapper from "./post_show_wrapper";

const mSTP = (state, ownProps) => {
  console.log(state);
  return {
    currentUserId: state.session.currentUser.id,
    state: state,
    ownProps: ownProps
  }
}

const mDTP = (dispatch) => ({
  fetchPost: (postId) => dispatch(fetchPost(postId))
})

export default connect(mSTP, mDTP)(PostShowWrapper)