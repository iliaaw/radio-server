class Listing < ActiveRecord::Base

  attr_accessible :track_id, :playlist_id
  belongs_to :playlist
  belongs_to :track

end
