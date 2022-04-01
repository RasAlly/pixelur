class Api::PostsController < ApplicationController

  def index 
    @posts = Post.all

    render "/layouts/api/posts/index"
  end
  
  def show
    @post = Post.find(params[:id])

    if @post  
      render "/layouts/api/posts/show"
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  def create 
    @post = Post.new(post_params)
    @post.creator_id = current_user.id

    if @post.save
      render "/layouts/api/posts/show"
    else
      render json: @post.errors.full_messages, status: 401
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post
      if @post.update(post_params)
        render "/layouts/api/posts/show" 
      else
        render json: @post.errors.full_messages, status: 401
      end 
    else
      render json: ['Could not locate post'], status: 400
    end
  end

  def destroy 
    @post = Post.find(params[:id])

    if @post 
      @post.destroy
      render "/layouts/api/posts/index"
    else
      render json: ['Could not locate post'], status: 400
    end
  end

  def post_params
    params.require(:post).permit(:title, :description, :photo)
  end
end
