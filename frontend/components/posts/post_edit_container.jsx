import React from "react";
import { connect } from "react-redux";
import { fetchPost, updatePost, deletePost } from "../../actions/post_actions";
import PostEdit from "./post_edit";

const mSTP = (state, ownProps) => {
  console.log(state);
  return { 
    state: state,
    post: state.posts.currentPost
  }
}

const mDTP = (dispatch) => ({
  updatePost: (post) => dispatch(updatePost(post)),
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  deletePost: (postId) => dispatch(deletePost(postId))
})

export default connect(mSTP, mDTP)(PostEdit)


// json.extract! post, :id, :title, :description, :creator_id
// json.photoUrl url_for(post.photo)