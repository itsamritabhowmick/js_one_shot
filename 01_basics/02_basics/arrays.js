const myArray = [0, 1, 2, 3, 4, 5];

// console.log(myArray[0]); // Accessing the first element.
const myHeros = ["shaktiman", "nagraj"];
const myArray2 = new Array(1, 2, 3, 4);
// console.log(myArray[1])

/*
//Array methods
myArray.push(6)//insert element
myArray.push(7) //insert another element
console.log(myArray); // [1, 2, 3, 4, 5, 6]

myArray.pop() //remove last element
console.log(myArray); // [1, 2, 3, 4, 5]
*/

/*
myArray.unshift(9) //insert element at the beginning
myArray.shift() //remove first element
console.log(myArray); // [0, 1, 2, 3, 4, 5]
*/

/*
console.log(myArray.includes(9)); // Check if 9 is in the array, returns false

console.log(myArray.indexOf(9)); // Find the index of 9, returns -1 since it's not in the array

console.log(myArray.indexOf(3)); // Find the index of 3, returns 0 since it's the third element
*/

/*
const newArr = myArray.join()
console.log(newArr)
console.log(typeof newArr); // Check the type of newArr, should be a string
*/

//slice ,splice
console.log("A ", myArray);
const myn1 = myArray.slice(1, 3); // Extracts elements from index 1 to 2 (3 is not included)
console.log(myn1); // [2, 3]
console.log("B ", myArray); // Original array remains unchanged

const myn2 = myArray.splice(1, 3); // Removes elements from index 1 to 3 (3 is not included)
console.log(myn2); // [2, 3, 4]
