Kigendan.Views.TracksSearchItem = Backbone.View.extend({

    template: JST['playlists/tracks_search_item'],

    tagName: 'tr',

    className: 'table-item',

    events: {
        'click a.add-link': 'addToPlaylist'
    },

    initialize: function() {
        
    },

    render: function() {
        this.$el.html(this.template({ track: this.model }));

        if (this.model.isAddedToPlaylist) {
            this.$el.addClass('table-item-added');
        } else {
            this.$el.removeClass('table-item-added');
        }
        
        return this;
    },

    addToPlaylist: function(event) {
        event.preventDefault();
        
        this.model.isAddedToPlaylist = true;

        if (this.model.trackView) {
            this.model.isRemovedFromPlaylist = false;
            this.model.trackView.render();
        }

        window._gPlaylist.tracks.add(this.model);

        this.render();
    }

});