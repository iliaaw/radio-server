Kigendan.Views.TracksSearch = Backbone.View.extend({

    template: JST['playlists/tracks_search'],

    el: '#tracks-search-wrapper',

    initialize: function() {
        var that = this;
        $("#tracks-search-form").submit(function(event) {
            event.preventDefault();

            var processResult = function(data, status) {
                that.collection = new Kigendan.Collections.Tracks(data);
                that.render();
            };

            $.get(this.action, $(this).serialize(), processResult, "json");
        });
    },

    render: function() {
        this.$el.html(this.template());
        $.each(this.collection.models, function(index, value) {
            var view = new Kigendan.Views.TracksSearchItem({ model: value });
            $('#tracks-search').append(view.render().$el);
        });
        return this;
    }

});