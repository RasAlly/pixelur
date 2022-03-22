
export const fetchAllPosts = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/posts'
  })
}

export const fetchPost = (postId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`
  })
}