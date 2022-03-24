import * as PostApiUtil from '../util/post_api_utils';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
})

const receivePost = (post) => {
  // debugger
  return {
    type: RECEIVE_POST,
    post
  }
}

export const fetchAllPosts = (index, limit) => (dispatch) => {
  return PostApiUtil.fetchAllPosts(index, limit)
    .then(posts => dispatch(receiveAllPosts(posts)))
}

export const fetchPost = (postId) => (dispatch) => {
  return PostApiUtil.fetchPost(postId)
    .then(post => dispatch(receivePost(post)))
}

export const createPost = (post) => (dispatch) => {
  // console.log(post);
  // debugger
  return PostApiUtil.createPost(post)
    .then(post => dispatch(receivePost(post)))
}