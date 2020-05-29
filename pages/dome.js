
function load() {
    setup();
    registerHandlers();
}

// Remove Property
function removeProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
        delete obj[prop];
    }
}

// Image Gallery
function setup() {
    var elm = document.getElementsByClassName("remove");
    for (var i = 0; i < elm.length; i++) {
        elm[i].addEventListener('click', function () {
            this.parentNode.parentNode.removeChild(this.parentNode);

        }, false);
    }
}

// Closures
function registerHandlers() {
    var links = document.getElementsByTagName('a');
    var len = links.length;

    for (var i = 1; i < len; i++) {
        links[i].onclick = generateHandler(i);
    }

    function generateHandler(index) {
        return function () {
            alert(index);
            return false;
        }
    }
}

// Loops
function appendChildren() {
    var allDivs = document.getElementsByTagName("div");
    console.log(allDivs);
    
    // make a copy - if you don't, you are adding to a live array which will cause an infinite loop
    allDivs = [].slice.call(allDivs, 0);
    
    for (var i = 0; i < allDivs.length; i++) {
        var elm = document.createElement("input");
        allDivs[i].appendChild(elm);
    }
}