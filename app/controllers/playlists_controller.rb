class PlaylistsController < ApplicationController

  before_filter :authenticate_user!

  before_filter do
    head :forbidden unless current_user.can_manage_tracks?
  end

  def index
    @playlists = Kaminari.paginate_array(Playlist.all(:order => "id")).page params[:page]        
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
    @playlist = Playlist.new(params[:playlist])
    @playlist.save
    respond_to do |format|
      format.html { redirect_to @playlist }
      format.json { render :json => @playlist }
    end
  end

  def show
    @playlist = Playlist.find(params[:id])
    respond_to do |format|
      format.html 
      format.json { render :json => @playlist }
    end
  end

  def update
    @playlist = Playlist.find(params[:id])
    @playlist.update_attributes(params[:playlist])
    respond_to do |format|
      format.json { render :json => @playlist }
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

end
  