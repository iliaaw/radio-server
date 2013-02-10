class Playlist < ActiveRecord::Base
  attr_accessible :description, :title, :listings_attributes
  has_many :listings
  has_many :tracks, :through => :listings
  accepts_nested_attributes_for :listings
end
