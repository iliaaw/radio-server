Kigendan.Views.Track = Backbone.View.extend({

    template: JST['tracks/track'],

    tagName: 'tr',

    className: 'tracks-table-item',

    events: {
        'click a.edit-link': 'startEdit',
        'click a.save-link': 'finishEdit',
        'click a.remove-link': 'removeModel'
    },

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.markAsRemoved);
    },

    render: function() {
        this.$el.html(this.template({ track: this.model }));
        if (this.model.isRemoved) {
            this.$el.addClass('tracks-table-item-removed');
        }
        return this;
    },

    startEdit: function(event) {
        event.preventDefault();

        this.hideInputWidgets();
        this.showInputWidgets(this);
    },

    showInputWidgets: function(view) {
        view.$el.addClass('tracks-table-item-editing');

        var link = view.$el.find('.edit-link').first()
        link.text('Save');
        link.removeClass('edit-link');
        link.addClass('save-link');

        view.$el.find('.tracks-table-item-input-title').val(view.model.get('title'))
        view.$el.find('.tracks-table-item-input-artist').val(view.model.get('artist'))
        view.$el.find('.tracks-table-item-input-album').val(view.model.get('album'))
        view.$el.find('.tracks-table-item-input-genre').val(view.model.get('genre'))
        view.$el.find('.tracks-table-item-input').first().focus();
    },

    hideInputWidgets: function() {
        $('.tracks-table-item-editing').removeClass('tracks-table-item-editing');

        $.each($('.save-link'), function() {
            $(this).text('Edit')
            $(this).removeClass('save-link')
            $(this).addClass('edit-link')
        })
    },

    finishEdit: function(event) {
        event.preventDefault();

        this.hideInputWidgets();

        this.model.save({ 
            title:  this.$el.find('.tracks-table-item-input-title').val(), 
            artist: this.$el.find('.tracks-table-item-input-artist').val(),
            album:  this.$el.find('.tracks-table-item-input-album').val(),
            genre:  this.$el.find('.tracks-table-item-input-genre').val()
        });
    },

    removeModel: function(event) {
        event.preventDefault();

        this.model.destroy();
    },

    markAsRemoved: function(event) {
        this.model.isRemoved = true;
        this.render();
    }

});