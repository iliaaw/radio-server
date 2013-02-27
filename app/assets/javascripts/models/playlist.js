Kigendan.Models.Playlist = Backbone.Model.extend({

    initialize: function() {
        this.isRemoved = false;
    },

    urlRoot: function() {
        return '/playlists';
    }

});