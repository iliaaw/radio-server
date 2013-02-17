Kigendan.Collections.Tracks = Backbone.Collection.extend({

    model: Kigendan.Models.Track,

    initialize: function() {
        $.each(this.models, function(index, model) {
            console.log(model.get('title'))
        });
    }

});
