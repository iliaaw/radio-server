Kigendan.Collections.Tracks = Backbone.Collection.extend({

    model: Kigendan.Models.Track,

    initialize: function() {
        
    },

    comparator: function(obj1, obj2) {
        var compare = function(a, b) {
            if (a > b) {
                return 1;
            } else {
                if (a < b) {
                    return -1;
                } else {
                    return 0;
                }
            }
        };

        if (obj1.has('position') && obj2.has('position')) {
            return compare(obj1.get('position'), obj2.get('position'));
        } else {
            return compare(obj1.id, obj2.id);
        }
    }

});
