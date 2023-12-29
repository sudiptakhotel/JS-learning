// //IIFE -> Immidiately invoked function expression

// //this is nothing but execute the function just after declaration.

// //production use --> some times we need to execute a function when our code starts to immidiately execute a function we use IIFE .

// //this is the normal way we declare and execute a function

// // function display() {
// //     console.log("This is  a simple function");
// // }
// // display();

// //IIFE way
// (function display() {
//     console.log("I am a named IIFE function");
// })()

// /* it is a very importabnt thing to remeber
// here it will throw error because once we execute an IIFE function it starts executing immediately but it does not know when to stop . So , we need to stop them mannualy before executing another followed function . To stop them simply add a  semicolon after the 1st IIFE(excution)

// */

// console.log("I am a simple cosole.log("); //now also it will work
// (() => {
//     console.log("I am second IIFE function");
// })()



//lets practice more IIFE

// const funcOne = (() => {
//     console.log("I am an IIFE function");
// })();

// (function displayName(name) {

//      console.log(`your name is : ${name}`);

// })("Rahul") //so this is just a function where we can pass any parameter and arguments

// (function cartPrice(...price){
//     console.log(price);
// })(10,89,789,67,5000); //here we use rest operator

