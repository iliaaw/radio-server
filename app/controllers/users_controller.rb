class UsersController < ApplicationController

  before_filter :authenticate_user!

  def index
    unless current_user.is_admin? 
      render :json => { :error => true }, :status => 403
    else
      @users = Kaminari.paginate_array(User.all(:order => "id")).page params[:page]        
      respond_to do |format|
        format.html 
        format.json { render :json => @users }
      end
    end
  end

  def update
    @user = User.find(params[:id])
    unless current_user.is_admin? && @user.update_attributes(params[:user])
      render :json => { :error => true }, :status => 403
    else 
      render :json => @user
    end
  end
  
end
