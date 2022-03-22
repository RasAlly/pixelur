json.extract! post, :id, :title, :creator_id
json.photoUrl url_for(post.photo)