//here we are going to learm for-in loop

//Array

let arr = [19,89,689,789];
// for (const key in arr) {
//    console.log(key); //its going to print indexes not the value direct
// }

// for (const key in arr) {
//    console.log(arr[key]);
// }

//String

// const str = "hello world";
// for (const key in str) {

//     if(str[key] == " ") continue;
//     console.log(str[key]);
// }


//arrays of object

// const player = [
//     {
//         playeName : "Messi",
//         club: "Inter Miami"
//     },
//     {
//         playeName : "ronaldo",
//         club : "Al Nasar"
//     },
//     {
//         playeName : "haland",
//         club : "Manchester city"
//     }
// ]

// for (const key in player) {
//    console.log(`name : ${player[key].playeName} , club : ${player[key].club}`);
// }

//Object

// const user = {
//     userName : "sudipta",
//     mobileNumber : 8123658753,
//     address : {
//         state : "westBengal",
//         ciry : "Howrah"
//     }
// };

// for (const key in user) {
//     console.log(user[key]);
// }

//Map

//not possible because map is not iterable

const map = new Map();
map.set(1 , "one");
map.set(1 , "one");
map.set(1 , "one");
map.set(1 , "one");

// //lets try to iterate this map by forIn()
// for (const key in map) {
//     console.log(key);
// }