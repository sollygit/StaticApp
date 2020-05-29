
function onload() {
    let storage = new Storage();
    var digit = storage.createCheckDigit(person.id);

    console.log(`Average: ${Functions.Average(10, 20)}`);
    console.log(`${person.fullName()} #${digit}`);
}

person = {
    id: 55555,
    firstName: "John",
    lastName: "Doe",
    fullName: function () { return this.firstName + " " + this.lastName; }
};

class Storage {
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