Kigendan.Models.Track = Backbone.Model.extend({

    initialize: function() {
        this.isRemoved = false;
    },

    urlRoot: function() {
        return '/tracks';
    }
    
});
