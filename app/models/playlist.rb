class Playlist < ActiveRecord::Base
  attr_accessible :description, :title
  has_many :listings
  has_many :tracks, :through => :listings
  accepts_nested_attributes_for :listings
end
