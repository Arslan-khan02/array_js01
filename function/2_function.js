// function in objects and array

// rest operAator or spread operator 
function calculateCartPrice(...number){
    return number
}
// console.log(calculateCartPrice(100,500,600)); 

// val1 or val2 wali ke andr first or second value chli gyi or baki bachi rest operator mai chali gyi
function calculatePrice(val1,val2,...number){
    return number
}
// console.log(calculatePrice(100,500,600,454,899)); 


// objects in function

const user={
    item: "arslan",
    price : 5666,
}

function handel(anyobject){
    console.log(`username is ${anyobject.item} and price of item is ${anyobject.price}`);


}
// console.log(handel(user));
console.log(handel({
    item : "bat",
    price : 4444,
}));

// array in function

const myArray = [120,50,1000,1465]

function getReturnSecondValue(anyArray){
    return anyArray[2]
}
// console.log(getReturnSecondValue(myArray));
console.log(getReturnSecondValue([500,1000,6000,1500]));