// // array is mix type of datatype and array is a resizeable 
// // copy operation in array of two type 
// // 1. shallow copy -> an objcect ia a copy whose properties share the same refrence (jo bhi change hoga wo original array mai bhi change hoga)
// // 2. deep copy -> an obj is a copy whose properties do not share the same refrence 

// // const stdName =["arslan", "dhaka",5,9,true]
// // console.log(stdName[1]);

// // methods in array 
// let myArr = [1, 2, 3, 4]
// myArr.push("arslan")//this method add some element in last 
// // myArr.push("a")
// // myArr.pop()//this method remove last element in array
// // myArr.unshift(10)//this method add an  element in starting
// // myArr.shift()//remove first element
// // includes used for check the element which is in array
// // indexof used for check the element by index number
// // console.log(myArr.indexOf(3));
// const newArr = myArr.join()//Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(myArr);
// console.log(newArr);


// slice , splice 
const firstArr = [1,2,3,4,5,6,7]
console.log("A" , firstArr);
const nArr = firstArr.slice(1,3)//slice do not manipulate orginal array
console.log(nArr);
console.log("B" , firstArr);
const bArr = firstArr.splice(1,3)//splice manipulate original array
console.log("C" , firstArr);
console.log(bArr);

