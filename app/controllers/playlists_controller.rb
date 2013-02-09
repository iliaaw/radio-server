class PlaylistsController < ApplicationController

  def index
    @playlists = Playlist.all(:order => "id")
    respond_to do |format|
      format.html 
      format.json { render :json => @playlists }
    end
  end

  def new
    @playlist = Playlist.new
    respond_to do |format|
      format.html 
      format.json { render :json => @playlist }
    end 
  end

  def create
    @playlist = Playlist.create(params[:playlist])
    respond_to do |format|
      format.html 
      format.json { render :json => @playlist }
    end
  end

end
  