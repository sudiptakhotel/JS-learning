//here we are going to see for-of loop in details

//lets apply on an array

const arr = ["messi" , "neymar" , "ronaldo" , "mbape" , "haland"];
//itertate over the array


//here we can directly access the item no need of index
// for (const players of arr) {
//     console.log(players);
// }

//lets apply on Stirng
const myName = "Sudipta Khotel";

// for (const character of myName) {
//     if(character === " ") continue;
//     console.log(character);
// }

//lets apply on array of oobjects

let objArr = [
    {
        playerName : "Messi" ,
        jerseyNum : 10
    },
    {
        playerName : "Ronaldo",
        jerseyNum : 7
    },
    {
        playerName : "Haland",
        jerseyNum : 9
    }
]
//lets try to iterate the array and get playerName

// for (const playerObj of objArr) {
//     // console.log(playerObj["playerName"]);  playerObj.playerName
// }


//lets try to iterate object only

//we can not iterate object by using for-off loop

// const user = {
//     userName : "sudipta",
//     designation : "system engineer"
// };
// // 
// for (const obj of user) {
//     console.log(obj.userName);
// }

// let iterable = [10,29,89,79];
// for (const iterator of iterable) {
//     console.log(iterator+1);
// }

//Map

const map = new Map();
map.set(1 , "one");
map.set(2 , "two");
map.set(3 , "three");
map.set(4 , "four");

//iterate by using forOf()

//below this will print both key and value
// for (const key of map) {
//     console.log(key);
// }

//lets say I want my key value independently

// for (const [key,value] of map) {
//     console.log(`key : ${key} , value : ${value}`);
// }