// git add . | git commit -am "" | git push

// 1
// function myfullName() {
// console.log("Abdullah Odulate");
// }

// 2
function myfullName(firstName, lastName) {
	return `${firstName} ${lastName}`;
}

// console.log(myfullName("Abdullah", "odulate"));

// 3
function addNumber(num1, num2) {
	let sum = num1 + num1;
	return sum;
}

// console.log(addNumber(2, 3));

// 4
function areaOfRectangle(length, width) {
	const area = length * width;
	return area;
}

// console.log(areaOfRectangle(3, 8));

// 5
function perimeterOfRectangle(length, width) {
	const area = 2 * (length + width);
	return area;
}

// console.log(areaOfRectangle(12, 6));

// 6
function volumeOfRectPrism(length, width, weight) {
	const volume = weight * length * width;
	return volume;
}

// console.log(volumeOfRectPrism(3, 7, 8));

// 7
function areaOfCircle(r) {
	const π = Math.PI;
	const area = π * r * r;
	return area;
}

// console.log(areaOfCircle(7));

// 8
function circumOfCircle(r) {
	const π = Math.PI;
	const circumference = 2 * π * r;
	return circumference;
}

// console.log(circumOfCircle(7));

// 9
function density(mass, volume) {
	const density = mass / volume;
	return density;
}

// console.log(density(3000, 500));

// 10
function speed(distance, time) {
	const S = distance / time;
	return S;
}

// console.log(speed(9000, 3600));

// 11
function weight(mass, gravity) {
	const weight = mass * gravity;
	return weight;
}

// console.log(weight(9000, 3600));

// 12
function convertCelsiusToFahrenheit(oC) {
	const oF = (oC * 9) / 5 + 32;
	return oF;
}

// console.log(convertCelsiusToFahrenheit(9000, 3600));

// 13
function bmi(weight, height) {
	weight * 1000;
	const bmi = weight / (height * height);
	if (bmi < 18.5) {
		return "Underweight";
	} else if (bmi < 25) {
		return "Normal weight";
	} else if (bmi < 30) {
		return "Overweight";
	} else {
		return "Obese";
	}
}

// console.log(bmi(60, 4.5));

// 14
// Write a function called _checkSeason_, it takes a month parameter and returns the season: Autumn, Winter, Spring or Summer.
function checkSeason(month) {
	// Ensure the month is a valid number between 1 and 12
	if (typeof month !== "number" || month < 1 || month > 12) {
		return "Invalid month";
	}

	// Determine the season based on the month
	switch (month) {
		case 12:
		case 1:
		case 2:
			return "Winter";
		case 3:
		case 4:
		case 5:
			return "Spring";
		case 6:
		case 7:
		case 8:
			return "Summer";
		case 9:
		case 10:
		case 11:
			return "Autumn";
		default:
			return "Invalid month";
	}
}

// console.log(checkSeason(1));

// ### Exercises: Level 2

// 15
// Linear equation is calculated as follows: _ax + by + c = 0_. Write a function which calculates value of a linear equation, _solveLinEquation_.

function solveLinEquation(a, b, c, x, y) {
	// Ensure the coefficients (a, b) are provided
	if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
		return "Invalid coefficients";
	}

	// Calculate the value of the linear equation
	const result = a * x + b * y + c;

	return result;
}

// console.log(solveLinEquation(1, 4, -8, 4, 6));

// 16
// Quadratic equation is calculated as follows: _ax2 + bx + c = 0_. Write a function which calculates value or values of a quadratic equation, _solveQuadEquation_.

function solveQuadratic(a = 0, b = 0, c = 0) {
	// Ensure the coefficients (a, b) are provided
	if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
		return "Invalid coefficients";
	}

	// formular = (-b ± √(b² - 4ac)) / 2a
	const discriminant = b * b - 4 * a * c;

	// the nature of the root

	if (discriminant > 0) {
		const root1 = ((-b + Math.sqrt(discriminant)) / 2) * a;
		const root2 = ((-b - Math.sqrt(discriminant)) / 2) * a;
		return { root1, root2 };
	} else if (discriminant === 0) {
		const root = (-b / 2) * a;
		return { root };
	} else {
		// ie discriminant < 0
		const realNum = (-b / 2) * a;
		const iNum = (Math.sqrt(Math.abs(discriminant)) / 2) * a;
		return { root1: `${realNum} + ${iNum}i`, root2: `${realNum} - ${iNum}i` };
	}
}

// console.log(solveQuadratic(1, 4, -8));

// 17
// Declare a function name _printArray_. It takes array as a parameter and it prints out each value of the array.

const printArray = (arr) => {
	for (const elem in arr) console.log(arr[elem]);
};

// printArray([1, 3, 5, 6, 3, 9]);

// 18
const showDateTime = () => {
	const date = new Date();
	const currDay = date.getDay();
	const currMonth = date.getDate() + 1;
	const currYear = date.getFullYear();
	const currHour = date.getHours();
	const currMins = date.getMinutes();

	const showCurrDay = currDay < 10 ? "0" + currDay : currDay;
	const showCurrMonth = currMonth < 10 ? "0" + currMonth : currMonth;
	const showCurHour = currHour < 10 ? "0" + currHour : currHour;
	const showCurrMin = currMins < 10 ? "0" + currMins : currMins;

	const dateString = `${showCurrDay}/${showCurrMonth}/${currYear} ${showCurHour}:${showCurrMin}`;
	return dateString;
};

console.log(showDateTime());

// 19
const swapValues = (...args) => {
	let [b, a] = args;
	return a, b;
};

// console.log(swapValues(3, 4));

// 20
// const reverseArray = (arr) => {
// 	const newArr = [];
// 	let i = 0;
// 	console.log(arr);
// 	for (let i = arr.length; i > 0; i--) {
// 		newArr.push(arr.pop());
// 	}
// 	return newArr;
// };

// const reverseArray = (arr) => {
// 	const newArr = [];

// 	function reverser(arrRef) {
// 		if (!arrRef.length) return newArr;
// 		newArr.push(arrRef.pop());
// 		reverser(arrRef);
// 	}

// 	reverser(arr);
// 	return newArr;
// };

const reverseArray = (arr, reversedArr = []) => {
	if (arr.length === 0) {
		return reversedArr;
	} else {
		reversedArr.push(arr.pop());
		return reverseArray(arr, reversedArr);
	}
};

// console.log(reverseArray([1, 2, 3]));

// 23
const capitalizeArray = (arr) => {
	console.log(arr);
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i].toUpperCase());
	}
	return newArr;
};

// console.log(
// 	capitalizeArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
// );

// 24
function addItem(...item) {
	let arr = [];
	if (typeof item !== "object") {
		arr.push(item);
	} else {
		arr.push(...item);
	}

	return arr;
}
// console.log(addItem("Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"));

// 25
function removeItem(i, arr) {
	if (i < 0 || i >= arr.length)
		return console.log(
			"invalid index. Index should be within the range of array"
		);
	const newArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
	return newArr;
}
// console.log(removeItem(5, [1, 2, 3, 4, 5, "A", "B", "C"]));

// 26
function sumOfNumbers(sum = 0, ...item) {
	if (item.length === 0) {
		return sum;
	}

	const [first, ...rest] = item;
	sum += first;

	return sumOfNumbers(sum, ...rest);
}
// console.log(sumOfNumbers(1, 2, 3, 4, 5));

// 27
function sumOfOdds(index) {
	if (typeof index !== "number") return "not a valid number";
	let sum = 0;
	for (let i = 0; i <= index; i++) {
		if (i % 2) sum += i;
	}
	return sum;
}
// console.log(sumOfOdds(5));

// 27
function sumOfEven(index) {
	if (typeof index !== "number") return "not a valid number";
	let sum = 0;
	for (let i = 0; i <= index; i++) {
		if (!(i % 2)) sum += i;
	}
	return sum;
}
// console.log(sumOfEven(5));

// 27
function evensAndOdds(index) {
	if (typeof index !== "number") return "not a valid number";
	let sumOfEven = 0;
	let sumOfOdds = 0;
	for (let i = 0; i <= index; i++) {
		if (!(i % 2)) sumOfEven++;
		if (i % 2) sumOfOdds++;
	}
	return `The number of odds are ${sumOfOdds}.\nThe number of evens are ${sumOfEven}.`;
}
// console.log(evensAndOdds(7));

// 28
function sumOfArgs(...args) {
	let sum = 0;
	for (let i = 0; i < args.length; i++) {
		if (typeof i !== "number") return "not a valid number";
		sum += args[i];
	}
	return sum;
}

// console.log(sumOfArgs(1, 2, 3));

// 28
function randomUserIp() {
	let ip = Array.from({ length: 4 }, () => Math.floor(Math.random() * 256));
	ip = ip.join(".");
	return ip;
}

// console.log(randomUserIp());

// 29
function randomMacAddress() {
	let mac = Array.from({ length: 6 }, () => Math.floor(Math.random() * 256));
	mac = mac.join(":");
	return mac;
}
// console.log(randomMacAddress());

// 30
function randomHexaColorCode() {
	let hex = Array.from({ length: 6 }, () =>
		Math.floor(Math.random() * 16).toString(16)
	);
	hex = `#${hex.join("")}`;
	return hex;
}
console.log(randomHexaColorCode());

// 30
function userIdGenerator() {
	const charRegex = /[a-z0-9]/g;
	let userId = "";
	while (userId.length < 7) {
		const randomChar = String.fromCharCode(Math.floor(Math.random() * 128));
		if (charRegex.test(randomChar)) {
			userId += randomChar;
		}
	}
	return userId;
}

console.log(userIdGenerator());
