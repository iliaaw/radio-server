Kigendan.Views.Track = Backbone.View.extend({

    template: JST['tracks/track'],

    tagName: 'tr',

    model: Kigendan.Models.Track,

    initialize: function() {
        console.log("Kigendan.Views.Track initialized");
    },

    render: function() {
        $(this.el).html(this.template({ track: this.model }));
        console.log("Kigendan.Views.Track rendered");
        return this;
    }

});