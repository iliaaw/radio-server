#!/usr/bin/liquidsoap
set("server.telnet", true)
output.icecast(
  %mp3,
  id = "stream",
  host = "localhost", 
  port = 8000,
  url = "localhost",
  password = "De3uHTerpaT0p",
  mount = "example.mp3",
  fallback(
    track_sensitive = false, [
      request.queue(id = "q"),
      mksafe(playlist(id = "playlist", mode = "normal", "/home/awolf/Projects/kigendan/playlist.m3u"))
    ]
  )
)
