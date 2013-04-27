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

    handleAdding: function(model, collection, options) {
        if (this.model.isNew()) { 
            var maxPosition = _.max(
                collection.models, 
                function(track) {
                    return (track.has('position') ? track.get('position') : 0);
                }
            ).get('position');
            if (typeof maxPosition == 'undefined') {
                maxPosition = 0;
            }
            var attrs = { position: maxPosition + 1 };
            var options = { silent: true };
            model.set(attrs, options);
            this.model.tracks.sort();
        } else {
            var that = this;
            this.model.save({}, {
                success: function(model, response, options) {
                    var tracks = response.tracks;
                    // the latest listing_id is the maximum one
                    var listingId = -1;
                    var position;
                    $.each(tracks, function(index, track) {
                        if (track.listing_id > listingId) {
                            listingId = track.listing_id;
                            position = track.position;
                        }
                    });
                    $.each(that.model.tracks.models, function(index, model) {
                        if (!(model.has('listing_id'))) {
                            model.set('listing_id', listingId);
                            model.set('position', position);
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

        var that = this;
        $('.playlist-tracks-table').tableDnD({
            onDragClass: 'info',
            onDrop: function(table, row) {
                var rows = table.tBodies[0].rows;
                $.each(rows, function(index, item) {
                    var id = $(item).data('id');
                    if (typeof id != 'undefined') {
                        var attrs = { position: index };
                        var options = { silent: true }
                        that.model.tracks.get(id).set(attrs, options);
                    }
                });

                that.model.tracks.sort();

                if (!(that.model.isNew())) {
                    that.model.save();
                }
            }
        });

        return this;
    }

});