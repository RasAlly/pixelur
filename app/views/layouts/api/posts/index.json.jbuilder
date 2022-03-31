json.array!(@posts) do |post|
  json.set! post.id
    json.partial! "/layouts/api/posts/post", post: post
end