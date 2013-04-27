class TracksController < ApplicationController
  
  before_filter :authenticate_user!
  
  def index
    if params[:query] and ['title', 'artist', 'album', 'genre'].include? params[:field]
      @tracks = Track.where("#{params[:field]} LIKE ?", "%#{params[:query]}%")
    else
      @tracks = Kaminari.paginate_array(Track.all(:order => "id")).page params[:page]
    end
    respond_to do |format|
      format.html
      format.json { render :json => @tracks }
    end
  end

  def new
    @track = Track.new
    respond_to do |format|
      format.html 
      format.json { render :json => @track }
    end
  end

  def create
    @track = Track.new(params[:track])
    respond_to do |format|
      if @track.save
        format.json { render :json => @track }
      else
        format.json { render :json => { :error => @track.errors[:upload] }, :status => :unprocessable_entity }
      end
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
