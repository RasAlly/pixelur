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
  console.log(post);
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: post,
    processData: false,
    dataType: 'json'
    // contentType: false,
  })
}