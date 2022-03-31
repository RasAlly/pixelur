class Api::PostsController < ApplicationController
  # before_action :require_logged_in, only: [:create, :update]

  def index 
    # @posts = Post.all 
    # @posts = []
    # debugger
    
    @posts = Post.all
    # debugger

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
    # debugger
    @post = Post.new(post_params)
    @post.creator_id = current_user.id
    # debugger
    if @post.save
      render "/layouts/api/posts/show"
    else
      render json: @post.errors.full_messages, status: 401
    end
  end

  def update
    @post = Post.find(params[:id])
    # debugger
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
    # debugger
    params.require(:post).permit(:title, :description, :photo)
  end
end
