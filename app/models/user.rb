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

  alias_method :original_as_json, :as_json

  def as_json(options)
    json = original_as_json(options.merge(:only => [:id, :email, :admin, :dj, :broadcaster, :guest]))
  end
end
