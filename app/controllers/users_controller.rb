class UsersController < ApplicationController

  def create
    user = User.find_or_create_by(user_params)
    render json: {id: user.id, username: user.username}
  end

  private

  def user_params
    params.require(:user).permit(:username)
  end
end
