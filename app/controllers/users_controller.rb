class UsersController < ApplicationController
  def index
    users = User.all.order(name: :asc)
    render json: users
  end

  def show
  end

  def create
  end
end
