import { RECEIVE_ALL_POSTS, RECEIVE_POST } from "../actions/post_actions";

const postsReducer = (state = [], action) => {

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      state.push(action.posts);
      return state;

    case RECEIVE_POST:
      return action.post;

    default:
      return state;
  }
}

export default postsReducer;