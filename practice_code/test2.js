//here I am going to practice different 

//object
const myUser = {
    userName : "Sudipta Khotel",
    emailId : "sudiptakhotel4@gmail.com",
    address : {
        state : "west bengal",
        city : "Howrah",
        pincode : 711101,
        mobileNUmber : [8617784992 , 9874486208]
    }
}

//iterate over the object
// for (const key in myUser) {
//   console.log(key ,":",myUser[key]);
// }

//printing particular property of object
//console.log(myUser.address.city);
//console.log(myUser["address"]["state"]);

//Array
// let arr = [10 , 20 , 30 , 40 , 50 , 60];
// const value = arr.map((item) => {
//     return item*10;
// }).filter((item) => {
//     return item>=400
// })

// console.log(value);

//IIFE function
// (function displayMessage(message){
//     console.log(`${message}`);
// })("Hi I am learning javascript");


//Arrow function
// const sum = (a,b) => (a+b);
// console.log(sum(8,8));

//nullish coalscing
// function displayMessage(){
//     return "This is not a null";
// }
// let value = null ?? displayMessage();
// console.log(value);

//ternary operator
// let x = 10;
// let val = (x<=10) ? console.log("correct") : console.log("not correct");




