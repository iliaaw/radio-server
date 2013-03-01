Kigendan.Views.PLaylistWithTracks = Backbone.View.extend({

    template: JST['playlists/playlist_with_tracks'],

    el: '.playlist-tracks-wrapper',

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model.tracks, 'add', this.render);

        var that = this;
        $('.playlist-form').submit(function(event) {
            event.preventDefault();

            var attrs = {};
            var options = {};

            if ($('#playlist_title').length) {
                attrs.title = $('#playlist_title').val();

                options.success = function(model, response, options) {
                    window.location = model.url();
                };
            }
                
            options.error = function(model, xhr, options) {
                // TODO show error message
            };

            that.model.save(attrs, options);
        });

        $('.spoiler-link').click(function(event) {
            event.preventDefault();

            $('.spoiler').show();
            $('.spoiler-link').hide();
        })
    },

    render: function() {
        this.$el.html(this.template({ playlist: this.model }));

        var that = this;
        $.each(this.model.tracks.models, function(index, value) {
            var view = new Kigendan.Views.PlaylistWithTracksItem({
                model: value, 
                playlist: that.model 
            });
            value.trackView = view;
            $('.playlist-tracks-table').append(view.render().$el);
        });

        return this;
    }

});