Kigendan.Models.PlaylistWithTracks = Backbone.Model.extend({

    initialize: function(attrs) {
        var tracks;
        if (typeof attrs != 'undefined') {
            tracks = attrs.hasOwnProperty('tracks') ? attrs.tracks : {};
        }
        this.tracks = new Kigendan.Collections.Tracks(tracks);
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
        console.log(json)
        return json;
    },

    urlRoot: function() {
        return '/playlists';
    }

});