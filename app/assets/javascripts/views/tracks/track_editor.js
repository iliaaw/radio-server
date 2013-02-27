Kigendan.Views.TrackEditor = Backbone.View.extend({

    template: JST['tracks/track_editor'],

    el: '.upload-editor',

    initialize: function() {
        
    },

    render: function() {
        this.$el.html(this.template({ track: this.model }));
        return this;
    }

});