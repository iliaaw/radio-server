Kigendan.Views.PlaylistsIndex = Backbone.View.extend({

    template: JST['playlists/playlists_index'],

    el: '#playlists-wrapper',

    initialize: function() {
        this.listenTo(this.collection, 'reset', this.render);
        this.listenTo(this.collection, 'add', this.render);
    },

    render: function() {
        this.$el.html(this.template());
        $.each(this.collection.models, function(index, value) {
            var view = new Kigendan.Views.Playlist({ model: value });
            $('#playlists').append(view.render().$el);
        });
        return this;
    }

});