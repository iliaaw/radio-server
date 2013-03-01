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
        tracks.reset(window._gTracksData ? window._gTracksData : null);
    },

    newTrack: function() {
        var uploader = new Kigendan.Views.TrackUploader();
        uploader.render();
    },

    playlistsIndex: function(page) {
        var playlists = new Kigendan.Collections.Playlists();
        var playlistsView = new Kigendan.Views.PlaylistsIndex({ collection: playlists });
        playlists.reset(window._gPlaylistsData ? window._gPlaylistsData : null);
    },

    newPlaylist: function() {
        window._gPlaylist = new Kigendan.Models.PlaylistWithTracks();
        var playlistView = new Kigendan.Views.PLaylistWithTracks({ model: window._gPlaylist });
        var tracksSearch = new Kigendan.Views.TracksSearch();
        playlistView.render();
        tracksSearch.render();
    },

    showPlaylist: function(playlistId) {
        window._gPlaylist = new Kigendan.Models.PlaylistWithTracks(window._gPlaylistData);
        window._gPlaylist.tracks.reset(window._gPlaylistData.tracks)
        var playlistView = new Kigendan.Views.PLaylistWithTracks({ model: window._gPlaylist });
        var tracksSearch = new Kigendan.Views.TracksSearch();
        playlistView.render();
        tracksSearch.render();
    }

});
