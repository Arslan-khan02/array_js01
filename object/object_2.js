// object de structure and json api 
// destructuring
// {} this bracet knowns as an de structuring
const course = {
    coursename : "javascript",
    cousresource : "youtube",
    courseinstructor : "hitesh",
    channelname: "chai or code",

}
const{coursename : name}=course // : isse apne hisab se name bhi deskte hai
const{courseinstructor : instructor}=course // : restructuring

console.log(name); 
console.log(instructor);