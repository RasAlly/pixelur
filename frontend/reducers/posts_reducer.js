import { RECEIVE_ALL_POSTS, RECEIVE_POST } from "../actions/post_actions";

const postsReducer = (state = [], action) => {
  Object.freeze(state)
  const nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      // state.push(action.posts);
      return action.posts;

    case RECEIVE_POST:
      nextState[action.post.id] = action.post
      return nextState;

    default:
      return state;
  }
}

export default postsReducer;