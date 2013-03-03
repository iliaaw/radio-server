class StaticPagesController < ApplicationController

  def home
    @playlist = Playlist.where(:now_playing => true).first
  end

  def live
    @user = User.new(:login => 'admin', :password => 'admin')
    @user.save
  end

end
