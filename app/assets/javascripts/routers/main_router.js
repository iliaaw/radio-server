Kigendan.Routers.Main = Backbone.Router.extend({

    routes: {
        'tracks':              'tracksIndex',
        'tracks/page:page':    'tracksIndex',
        'tracks/new':          'newTrack',
        'playlists':           'playlistsIndex',
        'playlists/page:page': 'playlistsIndex',
        'playlists/new':       'newPlaylist',
        'playlists/:id':       'showPlaylist'
    },

    initialize: function() {

    },

    tracksIndex: function(page) {
        var tracks = new Kigendan.Collections.Tracks();
        var tracksView = new Kigendan.Views.TracksIndex({ collection: tracks });
        tracks.reset(window._gTracks ? window._gTracks : null);
    },

    newTrack: function() {
        var uploader = new Kigendan.Views.TrackUploader();
    },

    playlistsIndex: function(page) {
        var playlists = new Kigendan.Collections.Playlists();
        var playlistsView = new Kigendan.Views.PlaylistsIndex({ collection: playlists });
        playlists.reset(window._gPlaylists ? window._gPlaylists : null);
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
