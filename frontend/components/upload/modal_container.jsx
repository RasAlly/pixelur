import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions";
import Modal from "./modal";

const mSTP = (state, ownProps) => {
  console.log(state);
  return {
    post: state.posts,
    title: '',
    description: '' //make description column in table
  }
}

const mDTP = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post))
})

export default connect(mSTP, mDTP)(Modal);