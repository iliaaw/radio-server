Kigendan.Views.UsersIndex = Backbone.View.extend({

    template: JST['users/users_index'],

    el: '.users-wrapper',

    initialize: function() {
        this.listenTo(this.collection, 'reset', this.render);
        this.listenTo(this.collection, 'add', this.render);
    },

    render: function() {
        this.$el.html(this.template());
        $.each(this.collection.models, function(index, value) {
            var view = new Kigendan.Views.User({ model: value });
            $('.users-table').append(view.render().$el);
        });
        return this;
    }

});