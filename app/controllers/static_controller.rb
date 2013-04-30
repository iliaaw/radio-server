class StaticController < ApplicationController

  before_filter :authenticate_user!, :except => [:home, :before_publish]
  before_filter :allow_broadcaster, :except => [:home, :live, :before_publish]
  before_filter :allow_guest, :only => [:live]

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
