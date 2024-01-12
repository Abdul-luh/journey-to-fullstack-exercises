// function myfullName() {				-----1
// 	console.log("Abdullah Odulate");
// }

function myfullName(firstName, lastName) {
	// 2
	return `${firstName} ${lastName}`;
}

console.log(myfullName("Abdullah", "odulate"));

function addNumber(num1, num2) {
	// 3
	let sum = num1 + num1;
	return sum;
}

console.log(addNumber(2, 3));

function areaOfRectangle(length, width) {
	// 4
	const area = length * width;
	return area;
}

console.log(areaOfRectangle(3, 8));

function perimeterOfRectangle(length, width) {
	// 5
	const area = 2 * (length + width);
	return area;
}

console.log(areaOfRectangle(12, 6));

// 6
function volumeOfRectPrism(length, width, weight) {
	const volume = weight * length * width;
	return volume;
}

console.log(volumeOfRectPrism(3, 7, 8));

// 7
function areaOfCircle(r) {
	const π = Math.PI;
	const area = π * r * r;
	return area;
}

console.log(areaOfCircle(7));

// 8
function circumOfCircle(r) {
	const π = Math.PI;
	const circumference = 2 * π * r;
	return circumference;
}

console.log(circumOfCircle(7));

// 9
function density(mass, volume) {
	const density = mass / volume;
	return density;
}

console.log(density(3000, 500));

// 10
function speed(distance, time) {
	const S = distance / time;
	return S;
}

console.log(speed(9000, 3600));

// 11
function weight(mass, gravity) {
	const weight = mass * gravity;
	return weight;
}

console.log(weight(9000, 3600));

// 12
function convertCelsiusToFahrenheit(oC) {
	const oF = (oC * 9) / 5 + 32;
	return oF;
}

console.log(convertCelsiusToFahrenheit(9000, 3600));

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

console.log(bmi(60, 4.5));
