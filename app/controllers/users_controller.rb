class UsersController < ApplicationController

  before_filter :authenticate_user!

  before_filter do 
    head :forbidden unless current_user.can_manage_users?
  end

  def index
    @users = Kaminari.paginate_array(User.all(:order => "id")).page params[:page]        
    respond_to do |format|
      format.html 
      format.json { render :json => @users }
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(params[:user])
      render :json => @user
    else
      render :json => { :error => true }, :status => 403
    end
  end
  
end
