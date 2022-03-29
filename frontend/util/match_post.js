export const matchPost = (posts, postId) => {
  let i = posts.length;

  while(i) {
    const post = posts[i-1];

    if(postId == post.id) return post

    i -= 1;
  }
  return null;
}