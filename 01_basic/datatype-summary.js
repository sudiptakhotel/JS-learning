//Here we are going to deep dive in datatype 
//Base on how value has been stored in memory and how we can access it , datatype is divided into 2 categories -> Primitive and Non-primitive

//Promitive : primitive are call by value
//primitive data types - Number , String , Boolean , null , undefined , symbol , BigInt

// console.log(typeof(null)); // object
// console.log((typeof(undefined))); //undefined
// console.log(typeof(Symbol)); //function

//Non-primitive/reference - Array , object , function
//theseare call by reference

// let name = ["sudipta" , "rahul" , "mimi" , "camelia"]
// console.log(typeof(name)); =>object

// let employee={
//     name: "sudipta",
//     id: 101,
//     email: "sudipta@gmail.com"
// };
// console.log(employee);
// console.log(typeof(employee)); //object

let myFunction = function myFunction(){
    console.log("Hello world");
}
console.log(typeof(myFunction)); // function