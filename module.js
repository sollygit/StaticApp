var Module = (function() {
    // private
    function average(a, b) {
        return (a + b) / 2.0;
    }

    // public
    return {
        Average: function(a, b) {
            return average(a, b);
        },
        GetTime: function () {
            return Date();
        }
    };

})();
