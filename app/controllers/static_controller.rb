class StaticController < ApplicationController

  before_filter :authenticate_user!, :except => [:home, :before_publish]

  before_filter :only => [:enable_live, :disable_live] do
    render :text => '', :status => :forbidden unless current_user.can_manage_live_show?
  end

  def home
    @playlist = Playlist.where(:now_playing => true).first
  end

  def live
  end

  def before_publish
    render :text => ''
  end

  def enable_live
    begin
      TelnetAdapter.send_command('live.enable')
    rescue
      render :text => '', :status => :internal_server_error
    else
      render :text => ''
    end
  end

  def disable_live
    begin
      TelnetAdapter.send_command('live.disable')
    rescue
      render :text => '', :status => :internal_server_error
    else
      render :text => ''
    end
  end

end
