class TracksController < ApplicationController
  
  def index
    @tracks = Track.all(:order => "id")
    respond_to do |format|
      format.html 
      format.json { render :json => @tracks }
    end
  end

  def new
    @track = Track.new
    respond_to do |format|
      format.html 
      format.json { render :json => @track}
    end
  end

  def create
    @track = Track.create(params[:track])
    respond_to do |format|
      format.json { render :json => @track}
    end
  end

  def update
    @track = Track.find(params[:id])
    if @track.update_attributes(params[:track])
      respond_to do |format| 
        format.html { redirect_to @track }
        format.json { render :json => @track }
      end
    else
      respond_to do |format|
        format.html { render 'edit' }
        format.json { render :json => @track.errors }
      end
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    respond_to do |format|
        format.html { redirect_to tracks_path }
        format.json { head :no_content }
      end
  end

end
