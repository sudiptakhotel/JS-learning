
//creating a complex object

// let myUser = {
//     userName : "Sudipta Khotel",
//     userId : 123456,
//     emailId : "sudiptakhotel4@gmail.com",
//     address : {
//         state : "west bengal",
//         city : "Howrah",
//         pinCode : 711101,
//     },
//     mobileNumber : [8617784992 , 974486208]
// };

//lets iterate this object
//to iterate an object we have forin
// for (const key in myUser) {
//     if (key === "address") {
//         for (const key in myUser.address) {
//            console.log(`${key} : ${myUser.address[key]}`);
//         }
//         continue;
//     }
//     console.log(`${key} : ${myUser[key]}`);
// }

//after ES6 we have Object static method which converts object's properties to array and give us more flexibilty to access and iterate array properties

// let keyInMyUser = Object.keys(myUser);
// console.log(keyInMyUser);

// let valueInMyUser = Object.values(myUser);
// valueInMyUser.forEach( (val) => console.log(val)); 


// let entriesOfMyUser = Object.entries(myUser);
// //console.log(entriesOfMyUser);

// entriesOfMyUser.forEach( (value) => {
//     if(value[0] === "address"){
//         console.log(`pincode : ${value[1].pinCode}`);
//     }
// } )

//Array

// let arr = [
//     {
//         player : "messi",
//         club : "inter miami"
//     },
//     {
//         player : "haland",
//         club : "man city"
//     },
//     {
//         player : "mbape",
//         club : "PSG"
//     }
// ]

// for (const value of arr) {
//     console.log(value);
// }

//filter , map , reduce

// let myNumber = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80];

// let manipulateData = myNumber
// .filter( (data) => {
//     return data>=30;
// })
// .map( (data) => {
//     return data+11;
// })
// console.log(manipulateData);


//console.log(edit);

// let cartPrice = [100,500,100,700,800];

// let totalPriceToPay = cartPrice.reduce( (acc , currVal) => {
//     return acc+currVal
// },0);

// console.log(totalPriceToPay);

//IIFE - Immidiately invoked function expression

// (function display() {
//     console.log("I am a named IIFE function");
// })();


// (function displayName(name) {
//     console.log(name);
// })("sudipta");

// function display(){
//     console.log("simple");
// }

// display();


// (function displayName(name) {
//     console.log(name);
// })("sudipta");

// (display = () =>{
//     console.log("Hi");
// })();

//nulish

// alternative = ()=>{
//     return ("this is not null");
// }
// let val = null ?? alternative();
// console.log(val);

// let arr = [1,2,3,4,5,6];
// arr.forEach( (val) => console.log(val));