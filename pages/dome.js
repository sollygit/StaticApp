
// addEventListener
setTimeout(function () {
    var allDivs = document.getElementsByClassName("image");
    for (var i = 0; i < allDivs.length; i++) {
        allDivs[i].addEventListener('click', function () {
            var img = document.createElement('img');
            img.src = `../images/${this.id}.jpg`;
            this.insertBefore(img, this.firstChild);
        }, false);
    }
}, 1000);

function load() {
    setup();
    registerHandlers();
}

// Image Gallery
function setup() {
    var elm = document.getElementsByClassName("remove");
    for (var i = 0; i < elm.length; i++) {
        elm[i].addEventListener('click', function () {            
            if (this.parentNode.childElementCount == 2)
            {
                // Remove image div
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
            else
            {
                // Remove the first image in div
                this.parentNode.removeChild(this.parentNode.childNodes[0]);
                // Prevents the image click event to fire
                event.stopPropagation();
            }
            
            
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

function getTime() {
    document.getElementById('time').innerHTML = new Date();
}