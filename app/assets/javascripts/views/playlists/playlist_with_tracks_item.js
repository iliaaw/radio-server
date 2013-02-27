Kigendan.Views.PlaylistWithTracksItem = Backbone.View.extend({

    template: JST['playlists/playlist_with_tracks_item'],

    tagName: 'tr',

    className: 'playlist-track',

    events: {
        'click a.remove-from-playlist-link': 'removeFromPlaylist'
    },

    initialize: function(options) {
        this.playlist = options.playlist;
    },

    render: function() {
        this.$el.html(this.template({ track: this.model }));
        if (this.model.isRemovedFromPlaylist) {
            this.$el.addClass('playlist-track-removed');
        }
        return this;
    },

    removeFromPlaylist: function(event) {
        event.preventDefault();

        this.model.isRemovedFromPlaylist = true;

        if (!(this.playlist.isNew())) {
            this.playlist.save();
        }

        this.render();
    }

});