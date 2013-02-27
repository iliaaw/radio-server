Kigendan.Views.TrackUpload = Backbone.View.extend({

    template: JST['tracks/track_upload'],

    tagName: 'tr',

    className: 'upload',

    events: {
        "click a.cancel-link": "cancelUpload",
        "click a.edit-link": "processUpload"
    },

    initialize: function() {
        this.uploadStatus = {
            running: 0,
            finished: 1,
            cancelled: 2
        };
        this.status = this.uploadStatus.running;
    },

    render: function() {
        this.$el.html(this.template({ file: this.options.file, upload: this }));
        this.$el.find('.upload-progress-bar').css('width', this.options.progress + '%');
        return this;
    },

    cancelUpload: function(event) {
        event.preventDefault();

        this.options.jqXHR.abort();

        this.status = this.uploadStatus.cancelled;
        this.render();
    },

    finishUpload: function(options) {
        this.status = this.uploadStatus.finished;

        if (options.model) {
            this.model = new Kigendan.Models.Track(options.model);
        }

        this.render();
    },

    processUpload: function(event) {
        event.preventDefault();

        if (this.status == this.uploadStatus.finished) {
            var uploadEditor = new Kigendan.Views.TrackEditor({ model: this.model });
            uploadEditor.render();
        }
    }

});