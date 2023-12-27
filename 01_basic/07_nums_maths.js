//Here we are going to explore Number and Math library of js

//Number --> There is 2 ways to declare a Number
//1st
// let myAge = 23; //type - number
// //2nd
// let myNewAge = new Number(23); // Here we are specifying that we only want Number by using Number object . type - object
// console.log(typeof(myAge));
// console.log(typeof(myNewAge));

//+++++++++++++++++++++++FUNCTIONS++++++++++++++++++++++++

//lets explore with some functions of Numbers

//toExponential() --> this functions returns a String by converting input number in exponential format.

// let number1 = 1567;
// console.log(number1.toExponential()); //o/p --> 1.567e+3

//--------------------------------------------
//toFixed() --> it fixed the number of digits required after decimal point

// let number = 100.2345;
// console.log(`${number.toFixed(2)}`); //o/p -> 100.23

//------------------------------------
//toLocaleString() --> it converts the number into String in specified country's manner
// let number = 100000000;
// console.log(`${number.toLocaleString("en-IN")}`); o/p -> 10,00,00,000

//------------------------------
//toPrecision() --> this function returns a string representation of given Number with an integer pass as precision
// let number = 1234.56;
// console.log(`${number.toPrecision(5)}`); o/p --> 1234.6

//------------------------------
//toString() --> it converts a Number to String
// let number = 12345;
// let stringNumber = number.toString();
// //console.log(`${typeof(stringNumber)}`); typeOf --> string

//----------------------------
//isFinite() --> check the finiteness of a Number
// let number = 2/0;
// console.log(Number.isFinite(number)); o/p- >> false

//---------------------------
//isInteger() --> it checks if the number is integer or not
// let number = Math.PI;
// console.log(Number.isInteger(number));

//----------------------------
//
// let number = Number.parseFloat("1234.67");
// console.log(typeof(number));

//+++++++++++++++++++++++MATH++++++++++++++++++++++++++
//Math library comes inbuild with java script
// console.log(Math.abs(-100)); // absolute converts negative to positive
// console.log(Math.ceil(7.25)); //o/p --> 8
// console.log(Math.floor(245.89)); o/p--> 245
// console.log(Math.max(29,90,60)); o/p --> 90
// console.log(Math.pow(2,3)); o/p --> 8
// console.log(Math.round(34.67)); o/p --> 35
// console.log(Math.sqrt(25)); o/p--> 5

//-----------------------------------------
//random() --> it generates a random decimal number generates from 0 to 1


// min = 10 max = 20
// console.log(Math.ceil(10));
// console.log(Math.floor(20));

//lets see for dice - min = 1 max = 7
//0.9

//funtion to generate dice game value range from 0 to 6
// function diceGenerator(){
//     let min = 1;
//     let max = 7; //because max is exclusive
//     console.log(`you get this : ${Math.floor(Math.random() * (max-min) + min)}`);
// };
// diceGenerator();


 