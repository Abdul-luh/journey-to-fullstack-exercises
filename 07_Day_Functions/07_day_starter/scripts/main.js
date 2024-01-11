// console.log(countries);
// alert("Open the console and check if the countries has been loaded");

// function without parameter,  a function which make a number square
function squareOfTwo() {
	let num = 2;
	let sq = num * num;
	console.log(sq);
}
squareOfTwo();

// function without parameter
function addTwoNumbers() {
	let numOne = 10;
	let numTwo = 20;
	let sum = numOne + numTwo;

	console.log(sum);
}

addTwoNumbers(); // a function has to be called by its name to be executed

function printFullName() {
	let firstName = "Asabeneh";
	let lastName = "Yetayeh";
	let space = " ";
	let fullName = firstName + space + lastName;
	console.log(fullName);
}

printFullName(); // calling a function

// FUNCTIONS WITH PARAMETERS

function areaOfCircle(r) {
	let pi = Math.PI;
	let area = pi * r * r;
	return area;
}

let radius = 7;
console.log(areaOfCircle(radius));

// function with parameter,  a function which make a number square

function square(number) {
	return number * number;
}
console.log(square(2048));

// FUNCTIONS WITH PARAMETERS AND RETURN

// Function without parameter doesn't take input, so lets make a function with parameters
function sumTwoNumbers(numOne, numTwo) {
	let sum = numOne + numTwo;
	console.log(sum);
}
sumTwoNumbers(33, 44); // calling functions
// If a function doesn't return it doesn't store data, so it should return

function sumTwoNumbers(numOne, numTwo) {
	let sum = numOne + numTwo;
	return sum;
}
console.log(sumTwoNumbers(84, 26));

function printFullName(firstName, lastName) {
	return `${firstName} ${lastName}`;
}
console.log(printFullName("Asabeneh", "Yetayeh"));

// FUNCIONS WITH MULTIPLE PARAMETERS

// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}
const numbers = [1, 2, 3, 4, 5];
//calling a function
console.log(sumArrayValues(numbers));

// LET US ACCESS THE ARGURMENTS OBJECT IN THE FUNCTION

function sumAllNums() {
	console.log(arguments);
	// I can also access a specific index of the arguments passed in
	// console.log(arguments[0]);
}

sumAllNums(1, 2, 3, 4);
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// function declaration

function sumAllNumsFromArgs() {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}

console.log(sumAllNumsFromArgs(1, 2, 3, 4)); // 10
console.log(sumAllNumsFromArgs(10, 20, 13, 40, 10)); // 93
console.log(sumAllNumsFromArgs(15, 20, 30, 25, 10, 33, 40)); // 173

// function declaration

const sumAllElementOfArgs = (...args) => {
	let sum = 0;
	for (const element of args) {
		sum += element;
	}
	return sum;
};

console.log(sumAllElementOfArgs(1, 2, 3, 4)); // 10
console.log(sumAllElementOfArgs(10, 20, 13, 40, 10)); // 93
console.log(sumAllElementOfArgs(15, 20, 30, 25, 10, 33, 40)); // 173

// ANONYMOUS FUNCIONS

// Anonymous function or without name

const anonymousFun = function () {
	console.log(
		"I am an anonymous function and my value is stored in anonymousFun"
	);
};

// Expression Function

// Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable. Look at the example below.

// Function expression
const anonySquare = function (n) {
	return n * n;
};

console.log(anonySquare(2)); // -> 4

//
//
//
//
