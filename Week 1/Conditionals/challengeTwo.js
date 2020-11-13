/*let myString = "this is a string";
let myNumber = 10;
let myBoolean = true;
let myArray = [10, "string", []];
let myObject = {firstKey: "a string"}
let myUndefined = undefined;
let myNull = null; */

//Challenge

let myObject = {
    string: "Keys are fun",
    number: 10, 
    boolean: true,
    object: { 
        first: "white", 
        second: "car"
    }
}

console.log(typeof myObject.object);

let value = typeof myObject.string;

if (value === "string"){
    console.log(`the value is a ${value}`);
} else if (value ==="number") {
console.log("Value is a number");
} else if (value === "boolean") {
console.log("The value is a boolean");
} else if (value === "object") {
console.log("The value is an object");
} else 
console.log("What are you?");

