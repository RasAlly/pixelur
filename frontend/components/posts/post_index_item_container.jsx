import React from "react";
import { connect } from "react-redux";
import { setCurrentPost } from "../../actions/post_actions";
import PostIndexItem from "./post_index_item";

const mSTP = (state, ownProps) => {
  return {
    post: ownProps.post
  }
}

const mDTP = (dispatch) => ({
  setCurrentPost: (post) => dispatch(setCurrentPost(post))
})

export default connect(mSTP, mDTP)(PostIndexItem)