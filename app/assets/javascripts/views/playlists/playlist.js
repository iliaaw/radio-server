Kigendan.Views.Playlist = Backbone.View.extend({

    template: JST['playlists/playlist'],

    tagName: 'tr',

    className: 'table-item',

    events: {
        'click a.edit-link': 'startEdit',
        'click a.save-link': 'finishEdit',
        'click a.remove-link': 'removeModel',
        'click a.play-link': 'play'
    },

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.markAsRemoved);
    },

    render: function() {
        this.$el.html(this.template({ playlist: this.model }));
        if (this.model.isRemoved) {
            this.$el.addClass('table-item-removed');
        }
        return this;
    },

    startEdit: function(event) {
        event.preventDefault();

        this.hideInputWidgets();
        this.showInputWidgets(this);
    },

    showInputWidgets: function(view) {
        view.$el.addClass('table-item-editing');

        var link = view.$el.find('.edit-link').first()
        link.text('Save');
        link.removeClass('edit-link');
        link.addClass('save-link');

        view.$el.find('.table-item-input-title').val(view.model.get('title'))
        view.$el.find('.table-item-input').first().focus();
    },

    hideInputWidgets: function() {
        $('.table-item-editing').removeClass('table-item-editing');

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
            title: this.$el.find('.table-item-input-title').val()
        });
    },

    removeModel: function(event) {
        event.preventDefault();

        this.model.destroy();
    },

    markAsRemoved: function(event) {
        this.model.isRemoved = true;
        this.render();
    },

    play: function(event) {
        event.preventDefault();

        $.ajax({
            url: this.model.url() + '/play',
            type: 'post'
        });
    }

});