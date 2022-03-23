import { connect } from "react-redux";
import { fetchAllPosts } from "../../actions/post_actions";
import PostIndexColumn from "./posts_index_column";

const mSTP = (state) => ({
  posts: state.posts
})

const mDTP = (dispatch) => ({
  fetchAllPosts: (index, limit) => dispatch(fetchAllPosts(index, limit))
})

export default connect(mSTP, mDTP)(PostIndexColumn);