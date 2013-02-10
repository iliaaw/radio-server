Kigendan.Views.TrackUploader = Backbone.View.extend({

    template: JST['tracks/uploader'],

    el: '#uploader',

    views: {},

    initialize: function () {
        var that = this;
        this.$el.fileupload({

            dataType: "json",

            add: function(e, data) {
                $.each(data.files, function(index, file) {
                    var view = new Kigendan.Views.Upload({ file: file, progress: 0 });
                    $("#files-list").append(view.render().$el);
                    that.views[file.name] = view;
                });
                data.submit();
            },

            progress: function(e, data) {
                $.each(data.files, function(index, file) {
                    var progress = parseInt(data.loaded / data.total * 100, 10);
                    var view = that.views[file.name];
                    view.options.progress = progress;
                    view.render();
                    //console.log(file.name + ": progress: " + progress);
                });
            }

        })
    },

    render: function() {
        return this;
    }

});