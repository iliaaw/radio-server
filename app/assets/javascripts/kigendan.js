window.Kigendan = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    initialize: function() {  
        var mainRouter = new Kigendan.Routers.Main();
        Backbone.history.start({ pushState: true });
    }
};

$(document).ready(function(){
    Kigendan.initialize();
});
