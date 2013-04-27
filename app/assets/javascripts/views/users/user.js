Kigendan.Views.User = Backbone.View.extend({

    template: JST['users/user'],

    tagName: 'tr',

    className: 'table-item',

    events: {
        'click input:checkbox': 'check'
    },

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
        this.$el.html(this.template({ user: this.model }));
        return this;
    },

    check: function(event) {
        $target = $(event.target);
        this.model.set($target.attr('class'), $target.is(':checked'));
        this.model.save();
    }

});