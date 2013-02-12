class Playlist < ActiveRecord::Base

  attr_accessible :description, :title, :listings_attributes
  has_many :listings
  has_many :tracks, :through => :listings
  accepts_nested_attributes_for :listings

  alias_method :original_to_json, :to_json

  def to_json(options = {})
    json = original_to_json(options.merge(:include => :tracks))
  end

  def play
    File.open(Rails.root.join('playlist.m3u'), 'w') do |file|
      tracks.each do |track|
        file.puts track.upload.path
      end
    end
  end

end
