import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../../actions/post_actions";
import PostShow from './post_show';

const mSTP = (state, ownProps) => {
  console.log(ownProps);
  return {
    currentUserId: state.session.currentUser.id,
    currentPost: state.posts.currentPost
    // ownProps: ownProps
  }
}

const mDTP = (dispatch) => ({
  fetchPost: (postId) => dispatch(fetchPost(postId))
})

export default connect(mSTP, mDTP)(PostShow)