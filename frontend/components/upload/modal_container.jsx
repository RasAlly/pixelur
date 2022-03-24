import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions";
import Modal from "./modal";

const mSTP = (state) => ({
  post: {
    title: '',
    description: '' //make description column in table
  }
})

const mDTP = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post))
})

export default connect(null, mDTP)(Modal);