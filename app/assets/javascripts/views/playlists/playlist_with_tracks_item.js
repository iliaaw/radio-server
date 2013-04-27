Kigendan.Views.PlaylistWithTracksItem = Backbone.View.extend({

    template: JST['playlists/playlist_with_tracks_item'],

    tagName: 'tr',

    className: 'table-item',

    events: {
        'click a.remove-link': 'removeFromPlaylist'
    },

    initialize: function() {

    },

    render: function() {
        this.$el.html(this.template({ track: this.model }));

        if (this.model.isRemovedFromPlaylist) {
            this.$el.addClass('error');
        } else {
            this.$el.removeClass('error');
        }

        this.$el.data('id', this.model.id);
        
        return this;
    },

    removeFromPlaylist: function(event) {
        event.preventDefault();

        this.model.isRemovedFromPlaylist = true;

        if (this.model.searchItemView) {
            this.model.isAddedToPlaylist = false;
            this.model.searchItemView.render();
        }

        window._gPlaylist.tracks.trigger('remove');

        this.render();
    }

});