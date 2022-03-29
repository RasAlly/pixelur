json.extract! post, :id, :title, :description, :creator_id
json.photoUrl url_for(post.photo)
