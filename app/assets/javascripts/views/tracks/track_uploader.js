Kigendan.Views.TrackUploader = Backbone.View.extend({

    template: JST['tracks/uploader'],

    el: '#uploader',

    views: {},

    initialize: function () {
        var that = this;
        this.$el.fileupload({

            dataType: "script",

            add: function(e, data) {
                $.each(data.files, function(index, file) {
                    var view = new Kigendan.Views.Upload({ file: file, progress: 0 });
                    $("#files-list").append(view.render().$el);
                    that.views[data.file] = view;
                });
                data.submit();
                console.log("File added");
            },

            progress: function(e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                var view = that.views[data.file];
                view.options.progress = progress;
                view.render();
                console.log(view.options.file.name + ": progress: " + progress);
            }

        })


        console.log("Kigendan.Views.TrackUploader initialized");
    },

    render: function() {
        console.log("Kigendan.Views.TrackUploader rendered");
        return this;
    }

});