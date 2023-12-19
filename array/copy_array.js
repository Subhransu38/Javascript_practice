// Shallow copy of Array
// Points to the same memory location
const arr = [1, 2, 3, 4, 5, 6];
const newArr = arr;
newArr.splice(1, 4);

console.log(newArr, arr);

// Deep copy of Array
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArr1 = [...arr1]; // Array destructuring
newArr1.splice(1, 4);

const newArr2 = Array.from(arr1); // Array.from
newArr2.splice(1, 4);

const newArr3 = arr1.concat(); // arr.concat()
newArr2.splice(1, 4);

console.log(arr1, newArr1);
console.log(arr1, newArr2);
console.log(arr1, newArr3);

// How to add two array in javascript
