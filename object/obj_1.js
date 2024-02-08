// // obj literals
// // symbol kese define hota hai 
// // objct freez kese krte h
// // object ki value kese change hoti hai


// const mySym = Symbol("key")
// const jsUser = {
//   name: "arslan ",
//   age: 12,
//   [mySym]: "man",
//   gender: "male",
// }
// // Object.freeze(jsUser)
// jsUser.name = "urslan"

// // console.log(jsUser);
// // function kese dalte hai
// jsUser.greeting = function(){
//   console.log("hello JS user");

// }
// console.log(jsUser.greeting()); 

// jsUser.greetingTwo = function(){
  // console.log(`hello user ${this.name}`);
// }
// console.log(jsUser.greetingTwo());
// ==========================================================


// object sinngleton
// const tinderUser = new Object()//singleton objects
const tinderUser = {} // non singleton object
tinderUser.id = "13245abcd"
tinderUser.name = "hammad"
tinderUser.isLoggedIn = false
tinderUser.isCommited = false
tinderUser.height = "5'8"
// console.log(tinderUser);
// object ke andr object
const studentData = {
  email: "some@gmail.com",
  bio:{
    fullname :{
      firstname: "arslan",
      lastname:"khan",
    }
  }

}
console.log(studentData.email);
 
// console.log(studentData.bio.fullname.firstname);//nesting krna 


// combination of objects
const obj1 ={ 1: "a",2:"b"}
const obj2 ={3:"c",4:"d"}

// const obj3 = Object.assign({},obj1,obj2)//
const obj3 = {...obj1,...obj2} // spread operator use hoga jyada
console.log(obj3);


const restraunt = {
  menu : {
    item1: "dal",
    item2 : "chaval",

  },
  seats : 55,
  isStaffWorking : true,

}

console.log(restraunt);
console.log(Object.keys(restraunt));
console.log(Object.values(restraunt));
console.log(Object.entries(restraunt));
// object ke andr value janne ke liye wo hai ki nhi 
console.log(restraunt.hasOwnProperty('higene'));
