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
