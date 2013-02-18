Kigendan.Views.PlaylistWithTracksItem = Backbone.View.extend({

    template: JST['playlists/playlist_with_tracks_item'],

    tagName: 'tr',

    className: 'playlist-track',

    events: {
        'click a.remove-from-playlist-link': 'removeFromPlaylist'
    },

    initialize: function() {

    },

    render: function() {
        this.$el.html(this.template({ track: this.model }));
        return this;
    },

    removeFromPlaylist: function(event) {
        event.preventDefault();

        console.log("remove me")
    }

});