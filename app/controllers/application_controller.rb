class ApplicationController < ActionController::Base
  protect_from_forgery

  include SessionsHelper

  def force_login
    unless logged_in?
      redirect_to login_path
    end
  end
end
