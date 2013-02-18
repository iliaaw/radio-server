Kigendan.Views.PLaylistWithTracks = Backbone.View.extend({

    template: JST['playlists/playlist_with_tracks'],

    el: '.playlist-tracks-wrapper',

    initialize: function() {
        this.model.collection = new Kigendan.Collections.PlaylistsWithTracks();

        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model.tracks, 'add', this.render);

        var that = this;
        $('.playlist-form').submit(function(event) {
            event.preventDefault();

            that.model.save({ title: $('#playlist_title').val() });
        });
    },

    render: function() {
        this.$el.html(this.template({ playlist: this.model }));
        $.each(this.model.tracks.models, function(index, value) {
            var view = new Kigendan.Views.PlaylistWithTracksItem({ model: value });
            $('.playlist-tracks-table').append(view.render().$el);
        });
        return this;
    }

});