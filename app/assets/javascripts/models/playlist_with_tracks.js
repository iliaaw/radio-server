Kigendan.Models.PlaylistWithTracks = Backbone.Model.extend({

    initialize: function() {
        this.tracks = new Kigendan.Collections.Tracks();
    },

    listingsAttributes: function() {
        return this.tracks.map(function(value) {
            return { track_id: value.get('id') };
        });
    },

    toJSON: function() {
        var json = _.extend(_.clone(this.attributes), { listings_attributes: this.listingsAttributes() });
        return json;
    },

    parse: function(response) {
        if (response.tracks) {
            this.tracks = new Kigendan.Collections.Tracks(response.tracks);
            delete response.tracks;
            return response;
        } else {
            return response;
        }
    }

});