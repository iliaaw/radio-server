Kigendan.Routers.Main = Backbone.Router.extend({

    routes: {
        'tracks':            'tracksIndex',
        'tracks/page/:page': 'tracksIndex',
        'tracks/new':        'newTrack',
        'playlists':         'playlistsIndex',
        'playlists/page/:page':         'playlistsIndex',
        'playlists/new':     'newPlaylist',
        'playlists/:id':     'showPlaylist'
    },

    initialize: function() {
        
    },

    tracksIndex: function(page) {
        var tracks = new Kigendan.Collections.Tracks();
        tracks.url = page ? ('/tracks/page/' + page) : '/tracks';
        var tracksView = new Kigendan.Views.TracksIndex({ collection: tracks });
        tracks.fetch();
    },

    newTrack: function() {
        var uploader = new Kigendan.Views.TrackUploader();
    },

    playlistsIndex: function(page) {
        var playlists = new Kigendan.Collections.Playlists();
        playlists.url = page ? ('/playlists/page/' + page) : '/playlists';
        var playlistsView = new Kigendan.Views.PlaylistsIndex({ collection: playlists });
        playlists.fetch();
    },

    newPlaylist: function() {
        globalPlaylist = new Kigendan.Models.PlaylistWithTracks();
        var globalPlaylistView = new Kigendan.Views.PLaylistWithTracks({ model: globalPlaylist });
        var tracksSearch = new Kigendan.Views.TracksSearch();
    },

    showPlaylist: function(playlistId) {
        var playlist = new Kigendan.Models.PlaylistWithTracks({ id: playlistId });
        var playlistView = new Kigendan.Views.PLaylistWithTracks({ model: playlist });
        playlist.fetch();
    }

});
