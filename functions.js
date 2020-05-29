var Functions = (function () {
    
    // private
    function average(a, b) {
        return (a + b) / 2.0;
    }

    // public
    return {
        Average: function (a, b) {
            return average(a, b);
        }
    };

})();
