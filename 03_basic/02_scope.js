//we can say scope defines the avilabiity of variable inside the program

//There is mainly 2 kind of scope we have -> 1 .global , 2. block

//if a variable is declare outside any block{} it will have global scope so we can use that variable anywhere in the file

//if a variable is declared iside a block{} then it is going to avilable only inside that block

//why we do not use var ? 
//var has a global scope issue . Whenever we declare any varable with var it will be globally avilable although if we declare it in any block{} . So imagine you declare a variable inside a block and that variable is avilable outside the scope also then obviously it will create issue . This is why we avoid to declare variable by var

// let num1 = 10;
// const num2 = 20;


// if (true) {

//     let num1 = 10;
//     const num2 = 20;
//     var num3 = 3000

// }
// num3 =30;  --> this can be done because we use var num3 so it will have global scope

// console.log(num3);
//console.log(num1 , num2); --> this line will throw error because num1 and num2 are block scope variable so it is not going to avilable outside the scope


//+++++++++++++++++++++ nested block{} +++++++++++++++++++++++

// function parentFunc(){
//     const name = "sudipta";

//     function childFunc(){
//         const course = "java script";
//         //console.log(`${name} is learning ${course}`);
//          //we can access name because it will be treated as global variable inside the parentFunc() . So any block inside parentFunc() can access this name variable

//          function grandChild(){
//             const platform ="youtube"
//             console.log(`${name} is learning ${course} from platform ${platform}`);
//          }
//          grandChild();
//     }
//     //console.log(course); --> this line will throw error because course is having block scope as declared inside childFunc()

//     childFunc();
// }

// parentFunc();

//+++++++++++++++++++++ interesiting +++++++++++++++++++++++++

//there are couple of ways to declare a function in JS . In JS variable has super power it can hold anything 

//lets declare a function

// one();
// function one(){
//     console.log(" I am finctiopn one ");
// }

//so on above declaration we can able to execute one() before function declaration

//next way by storing thefunction in a variable

// two(); here it will throw error that can not access two() before initializations . This is an imporatnt difference need to understand and know from intervierw perspective as well

// let two = function(){
//     console.log("I am function two");
// }
