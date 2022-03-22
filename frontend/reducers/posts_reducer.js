import { RECEIVE_ALL_POSTS, RECEIVE_POST } from "../actions/post_actions";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;

    case RECEIVE_POST:
      return action.post;

    default:
      return state;
  }
}

export default postsReducer;