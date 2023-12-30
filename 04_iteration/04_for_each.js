//this loops comes inside array's properties so it is a very useful loop to use in array

//Array

//let players = ["messi" , "neymar" , "ronaldo" , "haland"];

//iterate by using forEach()

// inside forEach() we need to pass/write a callback function and inside that need to define what we want with our parameters

//we can also write arrow function as callback function

// players.forEach(function (item) {
//     console.log(item); // these items are arrays elements
// })

//arrowfunction in callback

// players.forEach( (player) => {
//      console.log(player);
// })

const player = [
        {
            playeName : "Messi",
            club: "Inter Miami"
        },
        {
            playeName : "ronaldo",
            club : "Al Nasar"
        },
        {
            playeName : "haland",
            club : "Manchester city"
        }
    ]

 //lets apply forEach() here
//  player.forEach((element,index) => {
//      console.log(`player name : ${element.playeName} , playerNumber : ${index}`);
//  })

//lets pass a function to our forEach() callBack

// function printItem(item) {
//     console.log(item.club);
// }

// player.forEach(printItem);

/*
this is not the case that forEach() has only item's accees it has also access of index and the whole array itself.
*/
    



