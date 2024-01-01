//here we are going to see the different variables types used in JS
//constant keyword
const accountId = 123456;
//var 
var accountEmail = "sudipta@gmail.com";
//let
let accountCity = "Kolkata";

//if we do not intialize a varibale and just declare it JS will treat it as undefined
let accountPhoneNumber;
//this also possible in JS to declare/initialize variable without var/let/const keyword .
//but this is highly unprofessional do not use it.
accountState = "WestBengal";

//Prefer to use let over var because var has block scope and functional scope issue
//print output in tabular format
console.table([accountCity , accountEmail, accountCity , accountState , accountPhoneNumber]);

//accountId = 909090; --> not possible it is defined as constant
console.log(accountState);