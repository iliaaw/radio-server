Kigendan.Views.Track = Backbone.View.extend({

    template: JST['tracks/track'],

    tagName: 'tr',

    className: 'track',

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
        $(this.el).html(this.template({ track: this.model }));
        return this;
    },

    startEdit: function(event) {
        event.preventDefault();

        this.hideInputWidgets();
        this.showInputWidgets(this);
    },

    showInputWidgets: function(view) {
        view.$el.addClass("track-editing");

        var link = view.$el.find(".edit-link").first()
        link.text("Save");
        link.removeClass("edit-link");
        link.addClass("save-link");

        view.$el.find(".track-input-title").val(view.model.get('title'))
        view.$el.find(".track-input-artist").val(view.model.get('artist'))
        view.$el.find(".track-input-album").val(view.model.get('album'))
        view.$el.find(".track-input-genre").val(view.model.get('genre'))
        view.$el.find(".track-input").first().focus();
    },

    hideInputWidgets: function() {
        $(".track-editing").removeClass("track-editing");

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
            title: this.$el.find(".track-input-title").val(), 
            artist: this.$el.find(".track-input-artist").val(),
            album: this.$el.find(".track-input-album").val(),
            genre: this.$el.find(".track-input-genre").val()
        });
    },

    removeModel: function(event) {
        event.preventDefault();

        this.model.destroy();
    }

});