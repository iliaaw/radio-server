class Playlist < ActiveRecord::Base

  attr_accessible :description, :title, :listings_attributes
  has_many :listings
  has_many :tracks, :through => :listings
  accepts_nested_attributes_for :listings

  alias_method :original_to_json, :to_json

  def to_json(options = {})
    json = original_to_json(options.merge(:include => :tracks))
  end

end
