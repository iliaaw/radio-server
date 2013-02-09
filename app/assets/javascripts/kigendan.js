window.Kigendan = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    initialize: function() {
        var tracks = new Kigendan.Collections.Tracks();
        var tracksView = new Kigendan.Views.TracksIndex({ collection: tracks });
        tracks.fetch();

        var uploader = new Kigendan.Views.TrackUploader();
    }
};

$(document).ready(function(){
    Kigendan.initialize();
});
