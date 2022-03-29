import React from "react";
import { connect } from "react-redux";
import { fetchAllPosts } from "../../actions/post_actions";
import PostsIndex from "./posts_index";

const mSTP = (state) => {
  return {
    posts: state.posts.allPosts
  }
}

const mDTP = (dispatch) => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts())
  }
}

export default connect(mSTP, mDTP)(PostsIndex);