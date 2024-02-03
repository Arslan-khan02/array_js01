// obj literals
// symbol kese define hota hai 
// objct freez kese krte h
// object ki value kese change hoti hai


const mySym = Symbol("key")
const jsUser = {
  name: "arslan ",
  age: 12,
  [mySym]: "man",
  gender: "male",
}
// Object.freeze(jsUser)
jsUser.name = "urslan"

// console.log(jsUser);
// function kese dalte hai
jsUser.greeting = function(){
  console.log("hello JS user");

}
console.log(jsUser.greeting()); 

jsUser.greetingTwo = function(){
  console.log(`hello user, ${this.name}`);
}
console.log(jsUser.greetingTwo());
