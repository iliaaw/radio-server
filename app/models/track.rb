class Track < ActiveRecord::Base

  attr_accessible :album, :artist, :bitrate, :duration, :genre, :release_date, :title, :upload, :upload_token
  has_many :listings
  has_many :playlists, :through => :listings
  
  mount_uploader :upload, TrackUploader

  alias_method :original_as_json, :as_json

  def as_json(options)
    json = original_as_json(options.merge(:only => [:id, :title, :artist, :album, :genre, :bitrate, :release_date]))
  end

end
