const arr = [1, 2, 3, 4, 5];
const arr1 = new Array(3, 2, 3, 4, 5, 1);

// console.log(arr1[5]);
console.log(arr1.length);

// console.log(arr);
// console.log(arr1);
// console.log(typeof arr);
// console.log(typeof arr1);
arr.push(2);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(2);
console.log(arr);
arr.shift();
console.log(arr);

arr.splice(2, 0, "star");
console.log(arr);
