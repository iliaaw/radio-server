Kigendan.Views.Playlist = Backbone.View.extend({

    template: JST['playlists/playlist'],

    tagName: 'tr',

    className: 'playlist',

    events: {
        "click a.edit-link": "startEdit",
        "click a.save-link": "finishEdit",
        "click a.remove-link": "removeModel"
    },

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function() {
        this.$el.html(this.template({ playlist: this.model }));
        return this;
    },

    startEdit: function(event) {
        event.preventDefault();

        this.hideInputWidgets();
        this.showInputWidgets(this);
    },

    showInputWidgets: function(view) {
        view.$el.addClass("playlist-editing");

        var link = view.$el.find(".edit-link").first()
        link.text("Save");
        link.removeClass("edit-link");
        link.addClass("save-link");

        view.$el.find(".input-title").val(view.model.get('title'))
        view.$el.find(".input").first().focus();
    },

    hideInputWidgets: function() {
        $(".playlist-editing").removeClass("playlist-editing");

        $.each($(".save-link"), function() {
            $(this).text("Edit")
            $(this).removeClass("save-link")
            $(this).addClass("edit-link")
        })
    },

    finishEdit: function(event) {
        event.preventDefault();

        this.hideInputWidgets();

        this.model.save({ 
            title: this.$el.find(".input-title").val()
        });
    },

    removeModel: function(event) {
        event.preventDefault();

        this.model.destroy();
    }

});