class UpdatePostsTable < ActiveRecord::Migration[5.2]
  def change
    change_column_null :posts, :title, true
  end
end
