require 'net/telnet'

class StaticPagesController < ApplicationController

  before_filter :authenticate_user!, :except => [:home]
  before_filter :allow_broadcaster, :except => [:home]

  def home
    @playlist = Playlist.where(:now_playing => true).first
  end

  def live
  end

  def on_publish_done
    pid = `pgrep ffmpeg`
    `sudo kill #{pid}`
    render :text => 'success'
  end

  def enable_live
    begin
      conn = Net::Telnet.new(
        'Host' => 'localhost', 
        'Port' => '1234',
        'Timeout' => 1,
        'Telnetmode' => false,
        'Prompt' => /.*/
      )
      conn.puts("live.enable\n")
      conn.waitfor("Match" => /^END$/)
    rescue
      render :text => 'error'
    else
      render :text => 'success'
    end
  end

  def disable_live
    begin
      conn = Net::Telnet.new(
        'Host' => 'localhost', 
        'Port' => '1234',
        'Timeout' => 1,
        'Telnetmode' => false,
        'Prompt' => /.*/
      )
      conn.puts("live.disable\n")
      conn.waitfor("Match" => /^END$/)
    rescue
      render :text => 'error'
    else
      render :text => 'success'
    end
  end

end
