import React from "react";
import { connect } from "react-redux";
import { fetchAllPosts } from "../actions/post_actions";
import HomePage from "./home_page";

const mSTP = (state, ownProps) => {
  return ({
    state: {...state}
  })
}

const mDTP = (dispatch) => ({
  fetchAllPosts: () => dispatch(fetchAllPosts())
})

export default connect(mSTP, mDTP)(HomePage)
