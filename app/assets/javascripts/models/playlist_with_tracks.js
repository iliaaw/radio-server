Kigendan.Models.PlaylistWithTracks = Backbone.Model.extend({

    initialize: function() {
        this.tracks = new Kigendan.Collections.Tracks();
    },

    listingsAttributes: function() {
        return this.tracks.map(function(value) {
            return {
                id: value.get('listing_id'),
                track_id: value.get('id'),
                _destroy: value.isRemovedFromPlaylist
            }
        });
    },

    toJSON: function() {
        var json = _.clone(this.attributes);
        if (this.tracks.length > 0) {
            json = _.extend(json, { listings_attributes : this.listingsAttributes() })
        }
        return json;
    },

    parse: function(response) {
        if (response.tracks) {
            this.tracks = new Kigendan.Collections.Tracks(response.tracks);
            delete response.tracks;
        }
        return response;
    },

    urlRoot: function() {
        return '/playlists';
    }

});