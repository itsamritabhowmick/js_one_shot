// Object.create

// myArray = ["h", "i"]//define an array

// //How to declare a symbol??
const mySym = Symbol("key1");

const JsUser = {
  //................using literal notation to create an object
  name: "Hitesh",
  "full name": "Hitesh Choudhary",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
}; //declaration of an object

// console.log(JsUser.email); //accessing the email property of the object...It is a first method

// console.log(JsUser["email"]); //accessing the email property of the object...It is a second method

// console.log(JsUser."full name")....This is not possible .Here only the sqare brackets can be used to access the property with space in it

/*
const JsUser = {
    mySym: "mykey1" // Here it is a string, not a symbol
}

console.log(JsUser.mySym)
console.log(typeof JsUser.mySym)
*/

/*
const mySym1 = Symbol("key2");
const JsUser1 = {
  [mySym1]: "mykey2" // Now it is a symbol
}
console.log(JsUser1[mySym1])
*/

JsUser.email = "hitesh@googgle.com";
// Object.freeze(JsUser) //This will make the object immutable. No changes can be made to the object now
JsUser.email = "hitesh@gchatggpt.com";
// console.log(JsUser)

JsUser.greeting = function () {
  console.log("Hello Js user");
};

JsUser.greetingTwo = function () {
  console.log(`  Hello Js user,${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo()); //Here function is called and the output is printed
console.log(JsUser.greeting); //Here function is not returned, but the reference to the function is returned
