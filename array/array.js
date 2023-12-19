// How do you create an empty array in JS
const arr = [1, 2, 3, 4, 5];
const arr1 = new Array(3, 2, 3, 4, 5, 1);
console.log(typeof arr);

// How do you access the first and last elements of an array

const firstElement = arr[0];
const lastElement = arr[arr.length - 1];
const lastElement1 = arr[-1];

// Adding element to the array

arr.push(6); // to last position O(N)
console.log(arr);
arr.unshift(7); // to first postion
console.log(arr);
arr.splice(3, 0, 10); // to any position
console.log(arr);

// Removing  element from the array

let popedElement = arr.pop(); // from last position
console.log(arr);
console.log(popedElement);
let shiftedElement = arr.shift(); // from first position
console.log(shiftedElement);
console.log(arr);
arr.splice(2, 3); // from any position
console.log(arr);

// update array element

arr.splice(2, 3, 100, 200);
console.log(arr);

// How do you loop through an array in Javascript

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

arr.forEach((ele) => {
	console.log(ele);
});

for (let x of arr) {
	console.log(x);
}

// slice vs splice
// slice = sub array
// splice = add, remove, update element of an array
const subArr = arr.slice(1, 4);
console.log(arr);
console.log(subArr);

// arr.splice(start index, how many to delete, rest adding element)
