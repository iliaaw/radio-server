Kigendan.Views.TrackEditor = Backbone.View.extend({

    template: JST['tracks/track_editor'],

    el: '.upload-editor',

    events: {
        'click a.save-link': 'saveModel'
    },

    initialize: function() {
        
    },

    render: function() {
        this.$el.html(this.template({ track: this.model }));
        return this;
    },

    saveModel: function(event) {
        event.preventDefault();

        this.model.save({ 
            title: this.$el.find(".upload-editor-input-title").val(), 
            artist: this.$el.find(".upload-editor-input-artist").val(),
            album: this.$el.find(".upload-editor-input-album").val(),
            genre: this.$el.find(".upload-editor-input-genre").val()
        });
    }

});