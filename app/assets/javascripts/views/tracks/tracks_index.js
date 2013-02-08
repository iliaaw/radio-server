Kigendan.Views.TracksIndex = Backbone.View.extend({

    template: JST['tracks/index'],

    el: '#tracks-list',

    initialize: function() {
        this.listenTo(this.collection, 'reset', this.render);
        console.log("TracksIndex view initialized");
    },

    render: function() {
        this.$el.html(this.template({ tracks: this.collection.models }));
        console.log("TracksIndex view rendered");
        return this;
    }

});
