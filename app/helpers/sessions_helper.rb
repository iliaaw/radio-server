module SessionsHelper

  def log_in(user)
    cookies.permanent[:user_id] = user.id
  end

  def log_out
    cookies.delete(:user_id)
  end

  def logged_in?
    !cookies[:user_id].blank?
  end

end
