class Api::PostsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update]

  def index 
    @posts = Post.all 
    render "/api/posts/index"
  end
  
  def show
    @post = Post.find(params[:id])

    if @post  
      render "/api/posts/show"
    else
      render json: @post.errors.full_messages, status: 404
  end

  def create 
    @post = Post.new(post_params)
    
    if @post.save
      @post.creator_id = current_user.id
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 401
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post
      if @post.update(post_params)
        render "api/posts/show" 
      else
        render json: @post.errors.full_messages, status: 401
      end 
    else
      render json: ['Could not locate post'], status: 400
    end
  end

  def post_params
    params.require(:posts).permit(:title)
  end
end
