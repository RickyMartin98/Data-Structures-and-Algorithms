const myObject = {
    name: "Martin",
    lastName: "Fernandez",
    age: 22
};

for (let prop in myObject) {
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


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greeting = function () {
    if (this.age >= 18)
        console.log(`Hello my names is ${this.name} and I'm and adult`);
    else
        console.log(`Hello my name is ${this.name} and I'm a kid`);
}

let Juan = new Person("Juan", 20);
let Miguel = new Person("Miguel", 16);

Juan.greeting();
Miguel.greeting();

//blueprint -> plano

function Stack() {
    this.storage = "";
}
/**
 * Adding value to storage property
 * @params { string } the value to be added in the property
 * 
 */

Stack.prototype.push = function (val) {
    //first validate if property it's empty
    if (this.storage == "")
        this.storage = val;
    else
        this.storage += "," + val;
}

/**
 * for pop function need to ask if property is a string to split and slice it (convert it to an array).
 * if it's not we only slice the last item of the array
*/

Stack.prototype.pop = function () {
    if (typeof this.storage == 'string')
        this.storage = this.storage.split(',').slice(0, -1);
    else
        this.storage = this.storage.slice(0, -1);
}
/**
 * we return the length value from the array already converted
 * @returns {number} the length of array.
 * 
 */
Stack.prototype.size = function () {
    //returning the length value from storage split by ","
    if (this.storage == 'string') 
        return this.storage.split(",").length;   
        
    return this.storage.length;
}

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("ReadBeans");

myWeeklyMenu.push("Banana");
myWeeklyMenu.push("Orange");
myWeeklyMenu.push("Peach");
myWeeklyMenu.push("Lemon");
console.log(myWeeklyMenu);

myWeeklyMenu.pop();
myWeeklyMenu.pop();

console.log(myWeeklyMenu.size());
console.log(myWeeklyMenu);