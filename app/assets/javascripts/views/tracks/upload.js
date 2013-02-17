Kigendan.Views.Upload = Backbone.View.extend({

    template: JST['tracks/upload'],

    tagName: 'tr',

    className: 'upload',

    events: {
        "click a.cancel-link": "cancelUpload"
    },

    initialize: function() {
    },

    render: function() {
        this.$el.html(this.template({ file: this.options.file, progress: this.progress }));
        this.$el.find('.bar').css('width', this.options.progress + '%');
        return this;
    },

    cancelUpload: function(event) {
        event.preventDefault();

        this.options.jqXHR.abort();

        this.$el.find('.progress').addClass('progress-danger');
        this.$el.find('.upload-cancel').html('<span>Cancelled</span>');
    },

    finishUpload: function() {
        this.$el.find('.upload-cancel').html('<span>Finished</span>');
    }

});