//Here we are going to explore different data types in JS

//alert("Sudipta"); we can not use alert in node js it can be used in browser

//differnt datatypes in JS
//numbers
//string
//bigint
//boolean - > true/false
//null - standalone value as well as object
//undefiend
//symbol - to indicate uniqueness

let name = "Sudipta Khotel";
console.log(typeof name); // it is a string type
let id = 123456;
console.log(id); // it is a number type
console.log(typeof true); // it is a boolean type data

//dataype of null and undefined
//diff b/w null and undefined - null meand empty but undefined means it ios declared only
let city;
let state = null;
console.table([typeof city , typeof state]); // undefined , object

//interview question
//typeof null is object
