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

export const createPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: post,
    contentType: false,
    processData: false
    // dataType: 'json'
  })
}

export const updatePost = (post) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.id}`,
    data: post
  })
}