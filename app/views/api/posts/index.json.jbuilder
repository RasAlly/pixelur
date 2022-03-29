json.array!(@posts) do |post|
  json.set! post.id
    json.partial! "api/posts/post", post: post
end