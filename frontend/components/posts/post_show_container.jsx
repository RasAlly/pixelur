import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../../actions/post_actions";
import PostShow from './post_show';

const mSTP = (state, ownProps) => {
  return {
    currentUserId: state.session.currentUser,
    currentPost: state.posts.currentPost
  }
}

const mDTP = (dispatch) => ({
  fetchPost: (postId) => dispatch(fetchPost(postId))
})

export default connect(mSTP, mDTP)(PostShow)