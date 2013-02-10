class Track < ActiveRecord::Base
  attr_accessible :album, :artist, :bitrate, :duration, :genre, :release_date, :title, :upload, :upload_token
  has_many :listings
  has_many :playlists, :through => :listings
  
  mount_uploader :upload, TrackUploader
end
