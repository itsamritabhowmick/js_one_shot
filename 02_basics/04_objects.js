const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Hitesh",
      lastname: "Choudhary",
    },
  },
};
//console.log(regularUser.fullname.userfullname.firstname) // Accessing nested object properties

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
// const obj3 = {obj1, obj2}
// console.log(obj3);
// const obj3 = Object.assign({}, obj1, obj2) // Merging two objects into one
// console.log(obj3)
const obj3 = { ...obj1, ...obj2 }; // Merging two objects into one using spread operator
// console.log(obj3)

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

// users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // Returns an array of keys of the object
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // Checks if the object has a property

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Hitesh",
};
const { courseInstructor } = course; // or we can write ---> const {courseInstructor: instructor} = course ----> to write shortly courseInstructor
console.log(courseInstructor); // Destructuring an object to extract a property

// {
//   name: "hitesh",
//   coursename: "js in hindi",
//   price: "free"
// }
