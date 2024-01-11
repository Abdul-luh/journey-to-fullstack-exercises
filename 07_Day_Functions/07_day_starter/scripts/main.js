// function myfullName() {				-----1
// 	console.log("Abdullah Odulate");
// }

function myfullName(firstName, lastName) {
	// 2
	return `${firstName} ${lastName}`;
}

console.log(myfullName());

function addNumber(num1, num2) {
	// 3
	let sum = num1 + num1;
	return sum;
}

console.log(addNumber());

function areaOfRectangle(length, width) {
	// 4
	const area = length * width;
	return area;
}

console.log(areaOfRectangle());

function perimeterOfRectangle(length, width) {
	// 5
	const area = 2 * (length + width);
	return area;
}

console.log(areaOfRectangle());

function volumeOfRectPrism(length, width, weight) {
	// 6
	const volume = weight * length * width;
	return volume;
}

console.log(volumeOfRectPrism());

function circumOfCircle(r) {
	// 6
	const π = Math.PI;
	const area = π * r * r;
	return area;
}

console.log(circumOfCircle());
