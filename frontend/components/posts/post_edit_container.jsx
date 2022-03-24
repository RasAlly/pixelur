import React from "react";
import { connect } from "react-redux";
import { fetchPost, updatePost } from "../../actions/post_actions";
import PostEdit from "./post_edit";

const mSTP = (state, ownProps) => {
  console.log(ownProps);
  return { 
    post: state.posts[ownProps.match.params.id]
  }
}

const mDTP = (dispatch) => ({
  updatePost: (post) => dispatch(updatePost(post)),
  fetchPost: (postId) => dispatch(fetchPost(postId))
})

export default connect(mSTP, mDTP)(PostEdit)