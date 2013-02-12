Kigendan.Routers.Main = Backbone.Router.extend({

    routes: {
        'tracks':        'tracksIndex',
        'tracks/new':    'newTrack',
        'playlists':     'playlistsIndex',
        'playlists/new': 'newPlaylist',
        'playlists/:id': 'showPlaylist'
    },

    initialize: function() {
        
    },

    tracksIndex: function() {
        var tracks = new Kigendan.Collections.Tracks();
        var tracksView = new Kigendan.Views.TracksIndex({ collection: tracks });
        tracks.fetch();
    },

    newTrack: function() {
        var uploader = new Kigendan.Views.TrackUploader();
    },

    playlistsIndex: function() {
        var playlists = new Kigendan.Collections.Playlists();
        var playlistsView = new Kigendan.Views.PlaylistsIndex({ collection: playlists });
        playlists.fetch();
    },

    newPlaylist: function() {
        globalPlaylist = new Kigendan.Models.PlaylistWithTracks();
        var globalPlaylistView = new Kigendan.Views.PLaylistWithTracks({ model: globalPlaylist });
        var tracksSearch = new Kigendan.Views.TracksSearch();
    },

    showPlaylist: function(playlistId) {
        //console.log(playlistId);
        var playlist = new Kigendan.Models.PlaylistWithTracks({ id: playlistId });
        var playlistView = new Kigendan.Views.PLaylistWithTracks({ model: playlist });
        playlist.fetch();
    }

});
