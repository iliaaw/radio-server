Kigendan.Collections.Tracks = Backbone.Collection.extend({

    model: Kigendan.Models.Track,

    url: '/tracks',

    initialize: function() {
        console.log("Kigendan.Collections.Tracks initialized");
    }

});
