class TracksController < ApplicationController
  
  def index
    @tracks = Track.all
    respond_to do |format|
      format.html 
      format.json { render :json => @tracks }
    end
  end

  def show
    @track = Track.find(params[:id])
  end

  def new
    @track = Track.new
  end

  def create
    track = Track.new(params[:track])
    if track.save
      redirect_to tracks_path
    else
      render 'new'
    end
  end

  def edit
    @track = Track.find(params[:id])
  end

  def update
    track = Track.find(params[:id])
    if track.update_attributes(params[:track])
      redirect_to tracks_path
    else
      render edit
    end
  end

  def destroy
    track = Track.find(params[:id])
    track.destroy
    redirect_to tracks_path
  end

end
