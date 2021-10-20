const myObject = {
    name: "Martin",
    lastName: "Fernandez",
    age: 22
};

for(let prop in myObject ) {
    console.log(` ${prop}: ${myObject[prop]}`);
}



function Building(floor) {
    this.what = "Building"; //what is
    this.floor = floor; //floors received as argument
}

//Prototype is used to add functions or methods to all intances to save space and have a clean code.
Building.prototype.countFloors = function () {
    console.log(`This building has: ${this.floor} floors`);
}

//the results of the shared method depend of the unique instance value
var myHouse = new Building(5);
myHouse.countFloors();

var myParentsHouse = new Building(2);
myParentsHouse.countFloors();


function Person (name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greeting = function () {
    if (this.age >= 18) {
        console.log(`Hello my names is ${this.name} and I'm and adult`);
    } 
    else  
    {
        console.log(`Hello my name is ${this.name} and I'm a kid`);
    }
}

let Juan = new Person("Juan", 20);
let Miguel = new Person("Miguel", 16);

Juan.greeting();
Miguel.greeting();

//blueprint -> plano