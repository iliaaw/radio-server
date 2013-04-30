class TracksController < ApplicationController
  
  before_filter :authenticate_user!
  
  before_filter do
    render :text => '', :status => :forbidden unless current_user.can_manage_tracks?
  end
  
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
    @track.update_attributes(params[:track])
    respond_to do |format|
      format.json { render :json => @track }
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    respond_to do |format|
        format.json { head :no_content }
      end
  end
  
end
