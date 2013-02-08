Kigendan.Views.TracksIndex = Backbone.View.extend({

    template: JST['tracks/index'],

    el: '#tracks-list',

    initialize: function() {
        this.listenTo(this.collection, 'reset', this.render);
        console.log("Kigendan.Views.TracksIndex view initialized");
    },

    render: function() {
        this.$el.html(this.template({ tracks: this.collection.models }));
        $.each(this.collection.models, function(index, value) {
            var view = new Kigendan.Views.Track({ model: value });
            $('#tracks').append(view.render().$el)
        });
        console.log("TracksIndex view rendered");
        return this;
    }

});
