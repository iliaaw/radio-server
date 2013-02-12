require 'net/telnet'

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
    conn = Net::Telnet.new(
      'Host' => 'localhost', 
      'Port' => '1234',
      'Timeout' => 1,
      'Telnetmode' => false,
      'Prompt' => /.*/
    )
    #conn.puts("example(dot)m3u.stop\n")
    #conn.waitfor("Match" => /^END$/)
    conn.puts("playlist(dot)m3u.reload\n")
    conn.waitfor("Match" => /^END$/)
  end

end
