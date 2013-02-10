class Track < ActiveRecord::Base
  attr_accessible :album, :artist, :bitrate, :duration, :genre, :release_date, :title, :upload, :upload_token
  mount_uploader :upload, TrackUploader
end
