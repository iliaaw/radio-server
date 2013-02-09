class Track < ActiveRecord::Base
  attr_accessible :album, :author, :bitrate, :duration, :genre, :release_date, :title, :upload
  mount_uploader :upload, TrackUploader
end
