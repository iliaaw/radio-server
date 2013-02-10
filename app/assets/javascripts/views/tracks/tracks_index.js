Kigendan.Views.TracksIndex = Backbone.View.extend({

    template: JST['tracks/tracks_index'],

    el: '#tracks-wrapper',

    initialize: function() {
        this.listenTo(this.collection, 'reset', this.render);
        this.listenTo(this.collection, 'add', this.render);
    },

    render: function() {
        this.$el.html(this.template());
        $.each(this.collection.models, function(index, value) {
            var view = new Kigendan.Views.Track({ model: value });
            $('#tracks').append(view.render().$el)
        });
        return this;
    }

});
