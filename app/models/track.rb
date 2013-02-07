class Track < ActiveRecord::Base
  attr_accessible :album, :author, :bitrate, :duration, :genre, :release_date, :title
end
