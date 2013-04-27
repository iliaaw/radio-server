class User < ActiveRecord::Base
  # devise setup
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
  attr_accessible :email, :password, :password_confirmation, :remember_me

  attr_accessible :admin, :dj, :broadcaster, :guest

  def is_admin?
    admin
  end

  def is_dj?
    dj
  end

  def is_broadcaster?
    broadcaster
  end

  def is_guest?
    guest
  end
end
