Kigendan.Views.TracksSearchItem = Backbone.View.extend({

    template: JST['playlists/tracks_search_item'],

    tagName: 'tr',

    className: 'track-search-item',

    events: {
        "click a.add-to-playlist-link": "addToPlaylist"
    },

    initialize: function() {
        
    },

    render: function() {
        this.$el.html(this.template({ track: this.model }));
        return this;
    },

    addToPlaylist: function(event) {
        event.preventDefault();

        globalPlaylist.tracks.add(this.model);
    }

});