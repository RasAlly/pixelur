import { RECEIVE_ALL_POSTS, RECEIVE_POST, RECEIVE_CURRENT_POST, REMOVE_POST } from "../actions/post_actions";

const _initialState = {
  allPosts: null,
  currentPost: null
}

const postsReducer = (state = _initialState, action) => {
  Object.freeze(state);
  const nextState = {...state};

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      // debugger
      nextState.allPosts = action.posts;
      return nextState;
                  
    case RECEIVE_CURRENT_POST:
      nextState.currentPost = action.post
      return nextState;

    case RECEIVE_POST:
      nextState.currentPost = action.post
      return nextState;

    case REMOVE_POST:
      delete nextState.allPosts[action.postId]

    default:
      return state;
  }
}

export default postsReducer;