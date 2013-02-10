Kigendan.Models.Playlist = Backbone.Model.extend({

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
    }

});