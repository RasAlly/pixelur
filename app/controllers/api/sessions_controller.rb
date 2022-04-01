class Api::SessionsController < ApplicationController
  
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['username or password is incorrect'], status: 401
    else
      login!(@user)
      render '/layouts/api/users/show';
    end
  end

  def destroy
    logout!
    render json: { message: 'Logout successful.' }
  end
end
