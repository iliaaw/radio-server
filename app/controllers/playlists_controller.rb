class PlaylistsController < ApplicationController

  def index
    respond_to do |format|
      format.html 
      format.json do
        @playlists = Kaminari.paginate_array(Playlist.all(:order => "id")).page params[:page]
        render :json => @playlists
      end
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
    if @playlist.save
      respond_to do |format|
        format.html { redirect_to @playlist }
        format.json { render :json => @playlist }
      end
    else
      respond_to do |format|
        format.html { render "new" }
        format.json { render :json => @playlist.errors }
      end
    end
  end

  def show
    respond_to do |format|
      format.html 
      format.json do
        @playlist = Playlist.find(params[:id])
        render :json => @playlist
      end
    end
  end

  def update
    @playlist = Playlist.find(params[:id])
    if @playlist.update_attributes(params[:playlist])
      respond_to do |format| 
        format.html { redirect_to @playlist }
        format.json { render :json => @playlist }
      end
    else
      respond_to do |format|
        format.html { render 'edit' }
        format.json { render :json => @playlist.errors }
      end
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    respond_to do |format|
        format.html { redirect_to playlists_path }
        format.json { head :no_content }
      end
  end

  def play
    @playlist = Playlist.find(params[:id])
    @playlist.play
    respond_to do |format|
      format.json { head :no_content }
    end
  end

end
  