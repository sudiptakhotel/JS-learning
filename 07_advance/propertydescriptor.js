// //there are some hidenn properties present in the Object which is hidden in console

// //question - Is it possible to change the Math.PI value? if yes then how and if not then why?

// //answer -

// //console.log(Math.PI);
// //console.log(Object.getOwnPropertyDescriptor(Math , "PI"));

// /*
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
//   here writable is false and that is why we can not chaange the value of PI
//   */

//   //lets create our own object and see their property and try to change them

//   //"use strict";
//   const myObj = {
//     username : "sudipta",
//     email : "trest@gmail.com",
//     password : "1234ABC",
//   }

// //   console.log(Object.getOwnPropertyDescriptor(myObj , "password"));

//   //we are going to change the enumerable:false of password so when we loop over the object passowrd is not visible 

//   Object.defineProperty(myObj , "password" , {
//     enumerable : false
//   })

// //  for (let key in myObj) {
// //     console.log(`${key} : ${myObj[key]}`);
// //  }

// //so password is not coming the o/p because we made enumerable false for password.

// //defineProperty() --> this is a static method which is used to define new property on an object or change a exsisting property . 
// //it returns the same obj which is passed with the modified property

// //inject a new property to myObj object

// const modified_obj = Object.defineProperty(myObj , "phoneNumber" ,{
//     value : 8617784992,

//     /*
//     when we inject new property by defineProperty() method by default that property's enumerable , writable , configurable are set as false so we can not see the property in log . We need to manually set theese properties to  : true
//     */

//     enumerable: true, 
//     //writable : false
    
// });
// console.log(modified_obj);

//  myObj.phoneNumber = 1245678; 
//  //its gonna throw error in strict mode
// //its not gonna change because I made writable : false for phoneNumber
// console.log(myObj.phoneNumber);

// //console.log(myObj);


//There is  2 way to define value of a property in defineProperty() method

//1st - > using value

const obj = {};
Object.defineProperty(obj , "prop1" , {
    value : "property 1",
    enumerable : true
})

//2nd - > by using getter and setter

let value = "property 2"
Object.defineProperty(obj , "prop2" , {
    get(){
        return value;
    },
    // set(newVal){
    //     value = newVal;
    // },
    enumerable : true,
    
})

//obj.prop2 = "property 3"; its not gonna work because set() is not present in the defineProperty()
console.log(obj.prop2);