Kigendan.Views.PLaylistWithTracks = Backbone.View.extend({

    template: JST['playlists/playlist_with_tracks'],

    el: '.playlist-tracks-wrapper',

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model.tracks, 'add', this.handleAdding);
        this.listenTo(this.model.tracks, 'remove', this.handleRemoval);

        var that = this;
        $('.playlist-form').submit(function(event) {
            event.preventDefault();

            var attrs = {
                title: $('#playlist_title').val()
            };

            var options = { 

                success: function(model, response, options) {
                    window.location = model.url();
                },

                error: function(model, xhr, options) {
                    // TODO show error message
                }

            };

            that.model.save(attrs, options);
        });

        $('.spoiler-link').click(function(event) {
            event.preventDefault();

            $('.spoiler').show();
            $('.spoiler-link').hide();
        })
    },

    handleAdding: function() {
        if (!(this.model.isNew())) {
            var that = this;
            this.model.save({}, {
                success: function(model, response, options) {
                    console.log(response);
                    var tracks = response.tracks;
                    var listing_id = -1;
                    $.each(tracks, function(index, track) {
                        if (track.listing_id > listing_id) {
                            listing_id = track.listing_id;
                        }
                    });
                    //console.log(listing_id);
                    $.each(that.model.tracks.models, function(index, model) {
                        if (!(model.has('listing_id'))) {
                            model.set('listing_id', listing_id);
                        }
                    });
                }
            });
        }

        this.render();
    },

    handleRemoval: function() {
        if (!(this.model.isNew())) {
            var that = this;
            this.model.save({}, {
                success: function(model, response, options) {
                    $.each(that.model.tracks.models, function(index, model) {
                        if (model.isRemovedFromPlaylist) {
                            model.notExists = true;
                        }
                    });
                }
            });
        }
    },

    render: function() {
        this.$el.html(this.template({ playlist: this.model }));

        $.each(this.model.tracks.models, function(index, value) {
            var view = new Kigendan.Views.PlaylistWithTracksItem({
                model: value
            });
            value.trackView = view;
            $('.playlist-tracks-table').append(view.render().$el);
        });

        return this;
    }

});