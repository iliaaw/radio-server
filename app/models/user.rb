class User < ActiveRecord::Base
  attr_accessible :login, :password

  has_secure_password
  validates_presence_of :password, :on => :create
end
