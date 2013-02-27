Kigendan.Models.Track = Backbone.Model.extend({

    initialize: function() {
        this.isRemoved = false;
        this.isAddedToPlaylist = false;
    },

    urlRoot: function() {
        return '/tracks';
    }
    
});
