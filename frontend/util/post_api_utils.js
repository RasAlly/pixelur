export const fetchAllPosts = (index, limit) => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts?index=${index}&limit=${limit}`
  })
}

export const fetchPost = (postId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`
  })
}