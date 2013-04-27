class ApplicationController < ActionController::Base
  protect_from_forgery

  protected
  def allow_admin
    render :text => '', :status => :forbidden unless current_user.is_admin?
  end

  def allow_dj
    render :text => '', :status => :forbidden unless current_user.is_dj?
  end

  def allow_broadcaster
    render :text => '', :status => :forbidden unless current_user.is_broadcaster?
  end

  def allow_guest
    render :text => '', :status => :forbidden unless current_user.is_guest?
  end
end
