Kigendan.Views.ExtendedPlaylist = Backbone.View.extend({

    template: JST['playlists/extended_playlist'],

    el: '#extended-playlist',

    tagName: 'div',

    initialize: function() {
        this.model.collection = new Kigendan.Collections.Playlists();

        this.listenTo(this.model.tracks, 'add', this.render);

        var that = this;
        $('#playlist-form').submit(function(event) {
            event.preventDefault();

            that.model.save({ title: 'test' });
        });
    },

    render: function() {
        this.$el.html(this.template({ playlist: this.model }));
        return this;
    }

});