Kigendan.Models.Track = Backbone.Model.extend({

    initialize: function() {
        this.isRemoved = false;
        this.isAddedToPlaylist = false;
        this.isRemovedFromPlaylist = false;
        this.notExists = false;
    },

    urlRoot: function() {
        return '/tracks';
    }
    
});
