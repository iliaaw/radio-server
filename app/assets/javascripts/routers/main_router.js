Kigendan.Routers.Main = Backbone.Router.extend({

    routes: {
        'tracks':              'tracksIndex',
        'tracks/page:page':    'tracksIndex',
        'tracks/new':          'newTrack',
        'playlists':           'playlistsIndex',
        'playlists/page:page': 'playlistsIndex',
        'playlists/new':       'newPlaylist',
        'playlists/:id':       'showPlaylist',
        'users':               'usersIndex'
    },

    initialize: function() {

    },

    tracksIndex: function(page) {
        var url = '/tracks' + (page ? ('/page' + page) : '');
        var tracks = new Kigendan.Collections.Tracks();
        tracks.url = url;
        var tracksView = new Kigendan.Views.TracksIndex({ collection: tracks });
        tracks.reset(window._gTracksData ? window._gTracksData : null);
    },

    newTrack: function() {
        var uploaderView = new Kigendan.Views.TrackUploader();
        uploaderView.render();
    },

    playlistsIndex: function(page) {
        var url = '/playlists' + (page ? ('/page' + page) : '');
        var playlists = new Kigendan.Collections.Playlists();
        playlists.url = url;
        var playlistsView = new Kigendan.Views.PlaylistsIndex({ collection: playlists });
        playlists.reset(window._gPlaylistsData ? window._gPlaylistsData : null);
    },

    newPlaylist: function() {
        window._gPlaylist = new Kigendan.Models.PlaylistWithTracks();
        var playlistView = new Kigendan.Views.PLaylistWithTracks({ model: window._gPlaylist });
        var tracksSearchView = new Kigendan.Views.TracksSearch();
        playlistView.render();
        tracksSearchView.render();
    },

    showPlaylist: function(playlistId) {
        window._gPlaylist = new Kigendan.Models.PlaylistWithTracks(window._gPlaylistData);
        var playlistView = new Kigendan.Views.PLaylistWithTracks({ model: window._gPlaylist });
        var tracksSearchView = new Kigendan.Views.TracksSearch();
        playlistView.render();
        tracksSearchView.render();
    },

    usersIndex: function(page) {
        var url = '/users' + (page ? ('/page' + page) : '');
        var users = new Kigendan.Collections.Users();
        users.url = url;
        var usersView = new Kigendan.Views.UsersIndex({ collection: users });
        users.reset(window._gUsersData ? window._gUsersData : null);
    }

});
