class Playlist < ActiveRecord::Base

  attr_accessible :description, :title, :listings_attributes, :now_playing
  has_many :listings, :dependent => :destroy
  has_many :tracks, :through => :listings, :order => 'listings.position'
  accepts_nested_attributes_for :listings, :allow_destroy => true

  before_save :play_if_needed

  alias_method :original_as_json, :as_json

  def as_json(options)
    json = original_as_json(options.merge(:only => [:id, :title, :description, :now_playing]))
    tracks = []
    listings.each do |l|
      track = l.track.as_json(:only => [:id, :title, :artist, :album, :genre])
      tracks << track.merge({ :listing_id => l.id, :position => l.position }) unless track.nil?
    end
    json.merge(:tracks => tracks)
  end

  def play_if_needed
    if (self.now_playing_changed? and self.now_playing_change)
      Playlist.update_all(:now_playing => false)

      File.open(Rails.root.join('playlist.m3u'), 'w') do |file|
        tracks.each do |track|
          file.puts track.upload.path
        end
      end

      TelnetAdapter.send_command('files.reload')
    end
  end

  def max_position
    if self.listings.blank?
      0
    else
      self.listings.last.position
    end
  end

end
