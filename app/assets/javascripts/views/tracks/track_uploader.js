Kigendan.Views.TrackUploader = Backbone.View.extend({

    el: '.uploader',

    tagName: 'table',

    className: 'uploads-table',

    views: {},

    initialize: function () {
        var that = this;
        this.$el.fileupload({

            dataType: 'json',

            add: function(event, data) {
                var jqXHR = data.submit();
                $.each(data.files, function(index, file) {
                    var view = new Kigendan.Views.TrackUpload({ 
                        file: file, 
                        progress: 0,
                        jqXHR: jqXHR
                    });
                    $('.uploads-table').append(view.render().$el);
                    that.views[file.name] = view;
                });
            },

            progress: function(event, data) {
                $.each(data.files, function(index, file) {
                    var progress = parseInt(data.loaded / data.total * 100, 10);
                    var view = that.views[file.name];
                    view.options.progress = progress;
                    view.render();
                });
            },

            done: function(event, data) {
                $.each(data.files, function(index, file) {
                    var view = that.views[file.name];
                    view.options.progress = 100;
                    view.finishUpload({ model: data.result });
                });
            },

            fail: function(event, data) {
                if (data.textStatus == 'error') {
                    var error = $.parseJSON(data.jqXHR.responseText).error;
                    $.each(data.files, function(index, file) {
                        var view = that.views[file.name];
                        view.finishUpload({ status: 'error' })
                    });
                }

                if (data.textStatus == 'abort') {
                    $.each(data.files, function(index, file) {
                        var view = that.views[file.name];
                        view.finishUpload({ status: 'aborted' })
                    })
                }
            }

        });

    },

    render: function() {
        return this;
    }

});