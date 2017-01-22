var person = {
	name: 'Matt',
	age: 38
};
var personJSON = JSON.stringify(person);
// created variable to store the converted (to JSON) object
// JSON.stringify takes one argument, which is the object you want converted to JSON
// now what we have stored in personJSON is actually a string and represents what we have above in the js person object
// (because JSON format is a string)

console.log(personJSON);
console.log(typeof personJSON);

// now turn this back into a js object
// create a var to store the result...

var personObject = JSON.parse(personJSON);
// parse method takes the string personJSON and will convert it into a js object

console.log(personObject.name);
console.log(typeof personObject);

console.log('CHALLENGE AREA');

var animal = '{"name": "Bootsie"}';

// convert to js object (use parse)
var animalObject = JSON.parse(animal);

// add age prop
animalObject.age = 11;

// convert back to JSON (use stringify) and log out to screen
// my version was... var animalJSON = JSON.stringify(animalObject);
// but didn't need to create the new animalJSON var, we can just overwrite the animal var by doing...
animal = JSON.stringify(animalObject);

console.log(animalObject);