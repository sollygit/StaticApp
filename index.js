person = {
    id: 55555,
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

(function (window) {
    setTimeout(function() { 
        var allDivs = document.getElementsByClassName("lorem-ipsum");
        // make a copy - if you don't, you are adding to a live array which will cause an infinite loop
        allDivs = [].slice.call(allDivs, 0);
        for (var i = 0; i < allDivs.length; i++) {
            allDivs[i].addEventListener('click', function () {
                var p = document.createElement('p');
                p.innerHTML = 'Click some more!';
                this.appendChild(p);
            }, false);
        }
    }, 1000);
})(this);

function onload() {
    let tester = new Tester();
    var digit = tester.createCheckDigit(person.id);

    console.log(`Average:${Module.Average(10, 20)}`);
    console.log(`${person.fullName()} #${digit}`);
}

function getTime() {
    var time = Module.GetTime();
    document.getElementById('time').innerHTML = Date();
}

class Tester {
    createCheckDigit(id) {
        var splited = id.toString().split('');
        while (splited.length > 1) {
            var sum = 0;
            for (var i = 0; i < splited.length; i++) {
                sum += parseInt(splited[i]);
            }
            splited = sum.toString();
        }
        return parseInt(splited);
    }
}