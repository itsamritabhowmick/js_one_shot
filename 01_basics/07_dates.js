/*
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(typeof myDate)
*/

// let myCreateDate = new Date(2025, 0, 23)
// let myCreateDate = new Date(2025, 0, 23,5,3);

// let myCreateDate = new Date("2025-05-25");
// console.log(myCreateDate.toLocaleString())

// let myTimeStamp = Date.now()
// // console.log(myTimeStamp)
// // console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
// console.log(newDate)
// console.log(newDate.getMonth()); // 0-11
// console.log(newDate.getDay()); // 1-31

// `${newDate.getDay()} and the time`

newDate.toLocaleString("default", {
  weekday: "long",
  timeZone: "Asia/Kolkata",
});
