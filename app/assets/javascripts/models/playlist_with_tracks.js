Kigendan.Models.PlaylistWithTracks = Backbone.Model.extend({

    initialize: function() {
        var tracks;
        if (this.has('tracks')) {
            tracks = this.get('tracks')
            this.unset('tracks', { silent: true });
        }
        this.tracks = new Kigendan.Collections.Tracks(tracks);
    },

    listingsAttributes: function() {
        return _.compact(this.tracks.map(function(track) {
            return (track.notExists ? undefined : {
                id: track.get('listing_id'),
                track_id: track.get('id'),
                position: track.get('position'),
                _destroy: track.isRemovedFromPlaylist
            });
        }));
    },

    toJSON: function() {
        var json = _.clone(this.attributes);
        if (this.tracks.length > 0) {
            json = _.extend(json, { listings_attributes : this.listingsAttributes() })
        }
        return json;
    },

    urlRoot: function() {
        return '/playlists';
    }

});