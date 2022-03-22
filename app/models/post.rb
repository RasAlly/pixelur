class Post < ApplicationRecord

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  has_one_attached :photo
    #hasn't been made yet
  # has_many :comments,
  #   foreign_key: :post_id,
  #   class_name: :Comment
end
