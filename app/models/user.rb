class User < ActiveRecord::Base
  # devise setup
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
  attr_accessible :email, :password, :password_confirmation, :remember_me

  attr_accessible :can_do_anything, :can_manage_tracks, :can_manage_users, :can_manage_live_show, :can_broadcast

  def can_do_anything?
    can_do_anything
  end

  def can_manage_tracks?
    can_do_anything || can_manage_tracks
  end

  def can_manage_users?
    can_do_anything || can_manage_users
  end

  def can_manage_live_show?
    can_do_anything || can_manage_live_show
  end

  def can_broadcast?
    can_do_anything || can_broadcast
  end

  alias_method :original_as_json, :as_json

  def as_json(options)
    json = original_as_json(options.merge(:only => [:id, :email, :can_do_anything, :can_manage_tracks, :can_manage_users, :can_manage_live_show, :can_broadcast]))
  end
end
