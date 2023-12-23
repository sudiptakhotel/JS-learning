//Here we are going to see conversion b/w diff data types

let score = 99;
//lets convert this to String
let stringScore = String(score);
//console.log(stringScore); // this function will change the data type to String
//console.log(typeof(stringScore));

//boolean -> number
let isSignedIn = true;
let numberSignedIn = Number(isSignedIn);
//console.log(numberSignedIn); //it will give output as 1
//true => 1 , false=> 0 , vice-versa
// if(numberSignedIn==1){
//     console.log(isSignedIn);
// }

// let name = "";
// let numberName = Number(name);
// console.log(numberName);
//"" => no value here so number will output as 0
// let name1 = "Rahul";
// let numberName1 = Number(name1);
// console.log(numberName1);

/*"Rahul" => see javascript is soft in typechecking so it allows us to covert a String in Number . But a String value "Rahul" can not be a Number so after converting if we check the value it will give NaN -> Not a number.
*/

// let num1 = "10";
// let num2 = "20";
//console.log(num1+num2); => it will give output as 1020 means it just concate 2 Strings because num1 and num2 are initialized as String

// let number1 = Number(num1);
// let number2 = Number(num2);
// console.log(number1+number2); // here output is 30

//*******************OPERATIONS***************************

let num1 = 10;
let num2 = 20;
// console.log(num1+num2+"30"); => o/p = 3030
//console.log("10" + "20" + 30); => o/p = 102030
// console.log(10+20+30+"40"+50); =>o/p = 604050

//so when String comes first JS will treat rest of the values after '+' as Strings

// console.log(2+true); => o/p = 3 because here + will convert boolean to number and as we know true = 1 , false = 0

//But above mentioned codes are not at all an efficient way to write codes .Codes should be highlry readble and understandable







