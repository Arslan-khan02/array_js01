// function myName(){
//     console.log("a");
//     console.log("r");
//     console.log("s");
//     console.log("l");
//     console.log("a");
//     console.log("n");
// }
// myName()
// function bnate time ()iske andr jo hota hai usko parameter bolte hai
// or call krte time jo()iske andr hota hai usko bolte hai arguement


// 3 trike se function likh  skte hai


// function addNumbers(num1 , num2){
//     console.log(num1+num2);
// }

// addNumbers(3,3)

// 2 tarika


// function addNumbers(num1 , num2){
//     let resultOfnum = num1 + num2
//     return resultOfnum
// }
// const result = addNumbers(10,50)
// console.log("result :", result);

// 3 tarika 

// function addNumbers(num1 , num2){
//     return num1 + num2
// }
// const result = addNumbers(10,5)
// console.log("result :", result);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function loginUser(username){
//     return `${username} just logged in`

// }
// console.log(loginUser("urslan"));
// basic if else condition
// function loginUser(username){
//     if(username === undefined){
//         console.log("please enter username");
//         return
//     }
//     return `${username} just logged in`

// }
// console.log(loginUser());
// function loginUser(username){
//     if(!username){
//         console.log("please enter username");
//         return
//     }
//     return `${username} just logged in`

// }
// console.log(loginUser());
function loginUser(username = "urvi"){
    // if(!username){
    //     console.log("please enter username");
    //     return
    // }
    return `${username} just logged in`

}
console.log(loginUser("asrlan"));



