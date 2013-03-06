class Listing < ActiveRecord::Base

  attr_accessible :track_id, :playlist_id, :position
  belongs_to :playlist
  belongs_to :track

  before_create :assign_position

  def assign_position
    if self.position.nil?
      self.position = self.playlist.max_position + 1;
    end
  end

end
