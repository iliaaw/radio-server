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
        console.log("Kigendan.Views.Track initialized");
    },

    render: function() {
        $(this.el).html(this.template({ track: this.model }));
        console.log("Kigendan.Views.Track rendered");
        return this;
    },

    startEdit: function(event) {
        event.preventDefault();

        this.hideInputWidgets();
        this.showInputWidgets(this);

        console.log("a.edit-link clicked");
    },

    showInputWidgets: function(view) {
        view.$el.addClass("track-editing");

        var link = view.$el.find(".edit-link").first()
        link.text("Save");
        link.removeClass("edit-link");
        link.addClass("save-link");

        view.$el.find(".input").eq(0).val(view.model.get('title'))
        view.$el.find(".input").eq(1).val(view.model.get('author'))
        view.$el.find(".input").first().focus();
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
            title: this.$el.find(".input").eq(0).val(), 
            author: this.$el.find(".input").eq(1).val()
        });
    },

    removeModel: function(event) {
        event.preventDefault();

        this.model.destroy();
    }

});