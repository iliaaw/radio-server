Kigendan.Views.TrackUpload = Backbone.View.extend({

    template: JST['tracks/track_upload'],

    tagName: 'tr',

    className: 'uploads-table-item',

    events: {
        'click a.cancel-link': 'cancelUpload',
        'click a.edit-link': 'processUpload'
    },

    initialize: function() {
        this.status = 'running';
        // { 'running', 'finished', 'aborted', 'error' }
    },

    render: function() {
        this.$el.html(this.template({ file: this.options.file, upload: this }));
        this.$el.find('.bar').css('width', this.options.progress + '%');
        if (this.status == 'error') {
            this.$el.addClass('error');
        }
        return this;
    },

    cancelUpload: function(event) {
        event.preventDefault();

        this.options.jqXHR.abort();
    },

    finishUpload: function(options) {
        this.model = options.model ? new Kigendan.Models.Track(options.model) : null;
        this.status = options.status ? options.status : 'finished';

        this.render();
    },

    processUpload: function(event) {
        event.preventDefault();

        if (this.status == 'finished') {
            var uploadEditor = new Kigendan.Views.TrackEditor({ model: this.model });
            uploadEditor.render();
        }
    }

});