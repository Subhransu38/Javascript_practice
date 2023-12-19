// How do you check if an element exists in an array

const arr = [1, 2, 3, 4, 5, 6, 4];

const findElement = (arr, target) => {
	for (let x of arr) {
		if (x === target) {
			return true;
		}
	}
	return false;
};

console.log(findElement(arr, 10));

// inbuilt function

console.log(arr.includes(4));
console.log(arr.includes(10));

// How do you check if an element exists in an array and return its index

const findElementIndex = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i;
		}
	}
	return "Element Doesn't Exist";
};
console.log(findElementIndex(arr, 14));

// inbuit function

console.log(arr.indexOf(14));
console.log(arr.indexOf(4));

console.log(arr.lastIndexOf(4));
console.log(arr.lastIndexOf(14));
