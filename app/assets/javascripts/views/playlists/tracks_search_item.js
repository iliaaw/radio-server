Kigendan.Views.TracksSearchItem = Backbone.View.extend({

    template: JST['playlists/tracks_search_item'],

    tagName: 'tr',

    className: 'tracks-search-item',

    events: {
        "click a.add-to-playlist-link": "addToPlaylist"
    },

    initialize: function() {
        
    },

    render: function() {
        this.$el.html(this.template({ track: this.model }));
        if (this.model.isAddedToPlaylist) {
            this.$el.addClass('tracks-search-item-added');
        }
        return this;
    },

    addToPlaylist: function(event) {
        event.preventDefault();

        window._gPlaylist.tracks.add(this.model);
        this.model.isAddedToPlaylist = true;
        this.render();
    },



});