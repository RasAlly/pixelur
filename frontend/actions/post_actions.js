import * as PostApiUtil from '../util/post_api_utils';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_CURRENT_POST = 'RECEIVE_CURRENT_POST'; // just set currentPost in state with already fetched post
export const RECEIVE_POST = 'RECEIVE_POST';// use to fetch post from backend
export const REMOVE_POST = 'REMOVE_POST';

const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
})

const receivePost = (post) => { 
  return {
    type: RECEIVE_POST,
    post
  }
}

const receiveCurrentPost = (post) => {
  return {
    type: RECEIVE_CURRENT_POST,
    post
  }
}

const removePost = (postId) => {
  return {
    type: REMOVE_POST,
    postId
  }
}

export const setCurrentPost = (post) => (dispatch) => {
  return dispatch(receiveCurrentPost(post));
}

export const fetchAllPosts = () => (dispatch) => {
  return PostApiUtil.fetchAllPosts()
    .then(posts => dispatch(receiveAllPosts(posts)))
}

export const fetchPost = (postId) => (dispatch) => {
  return PostApiUtil.fetchPost(postId)
    .then(post => dispatch(receivePost(post)))
}

export const createPost = (post) => (dispatch) => {
  return PostApiUtil.createPost(post)
    .then(post => dispatch(receivePost(post)))
}

export const updatePost = (post) => (dispatch) => {
  return PostApiUtil.updatePost(post)
    .then(post => dispatch(receivePost(post)))
}

export const deletePost = (postId) => (dispatch) => {
  return PostApiUtil.deletePost(postId) 
    .then(() => dispatch(removePost(postId)))
}