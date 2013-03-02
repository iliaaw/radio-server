class StaticPagesController < ApplicationController

  def home
    @playlist = Playlist.where(:now_playing => true).first
  end

end
