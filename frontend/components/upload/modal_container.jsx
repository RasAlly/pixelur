import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions";
import Modal from "./modal";

const mSTP = (state) => {
  return {
    post: state.posts.currentPost,
    title: '',
    description: '' 
  }
}

const mDTP = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post))
})

export default connect(mSTP, mDTP)(Modal);