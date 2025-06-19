const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "batman", "flash"];

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); // ["thor", "Ironman", "spiderman", ["superman", "batman", "flash"]]

// console.log(marvel_heroes[3][1]); // Accessing "batman" from the nested array

// const allHeros = marvel_heroes.concat(dc_heroes)
// console.log(allHeros); // ["thor", "Ironman", "spiderman", "superman", "batman", "flash"]

/*spread off

const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes); // ["thor", "Ironman", "spiderman", "superman", "batman", "flash"]

*/

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = anotherArray.flat(Infinity); // Flattens the array to a single level
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Hitesh")); // Returns false, since it's not an array
console.log(Array.from("Hitesh")); // Converts the string to an array of characters: ["H", "i", "t", "e", "s", "h"]

console.log(Array.from({ name: "hitesh" })); //always returns an empty array since the object has no iterable properties and if you want to convert an object to an array, you can use Object.entries() or Object.keys() or Object.values()

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Creates an array with the scores: [100, 200, 300] here of is used to create an array from the arguments passed to it, which can be any number of arguments, not just an array-like object.
