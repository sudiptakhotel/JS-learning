//Here we are going to learn Object .

//In JS object is a non-primitive dataType .
//There is 2 ways to declare/create an object
//1 . literal syntax , 2. Object constructor
//Here we will explore literal 

//declare
let obj1 = {
    name : "sudipta khotel",
    email: "sudiptakhotel4@gmail.com", //by default this keys are treated as string . 
    id: 101 ,
    1: 100
};
//how to access object properties
//2 ways to do that 
//1st -> by using dot
// console.log(obj1.email);
// //2nd -> [] square notation
// console.log(obj1["email"]); // as the key is String by default so in this approach to access at String key we need to use ""
// console.log(obj1[1]); //here the key is Number so need to use ""

//we can change the value of an objetc's property
// obj1["email"] = "skhotel@gmail.com";
// console.log(obj1);

//freeze() -> it is a static method to freeze an object . We can not change any exsisting property of a freezed object and can not remove or add any new property
// Object.freeze(obj1);
// obj1["name"] = "rahul";
// console.log(obj1); // no changes 

//common interview question that how to add Symbol dataype in object

const mySym = Symbol("key1");

//try to add this in obj2 as a symbol

const obj2 = {
    name : "messi",
    age : 35,
    jersey : 10,
    fullName: "Lionel Messi",
    mySym: "keysSim"
};
//console.log(typeof(obj2.mySym)); //it's type is string not Symbol.
//But interviwer wants this in Symbol
//so to add a Symbol in our object we need to write key inside[]
const obj3 = {
    name : "messi",
    age : 35,
    jersey : 10,
    fullName: "Lionel Messi",
    [mySym]: "keysSim"
};
// console.log(obj3);
//adding new properties
// obj3["mobileNumber"] = 8617784992;
// //console.log(obj3); //mobile number added in obj3
// //add a function to object

// obj3.myFunction = function(){
//     console.log(`Hi ${this["name"]}, I am function inside obj3`);
// }
// console.log(obj3.myFunction());

//test object creation
const testObj = {
    name : "myUser1",
    email: "myUser1@gmail.com",
    isLoggedIn: false,
    phoNumber : [1234556789 , 9876543210]
}
// console.log(testObj);
// console.log(typeof(testObj["phoNumber"])); //object because it is an array

//lets add a function inside the testObj
testObj.myTestFunc = function(){
    console.log(`Hey ${this.name} , please find your emailID : ${this.email}`);
}

// console.log(testObj.myTestFunc());

//lets add an  object inside testObj
// testObj.insideObj = {
//     city: "Howrah",
//     street: "Nabin Senapati Lane",
//     state: "WestBengal"
// }
// console.log(testObj["insideObj"]["street"]);//we have accessed the property of insideObj