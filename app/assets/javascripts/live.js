$(document).ready(function() {
    $('.enable-live-link').click(function(event) {
        event.preventDefault();
        $.post('/enable_live');
    }); 
    $('.disable-live-link').click(function(event) {
        event.preventDefault();
        $.post('/disable_live');
    });
});