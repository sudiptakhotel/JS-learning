//Lets talk about function() -- >

// function userLoggedInMessage (userName = `guestUser@${Math.floor(Math.random() * (100) + 1)}`){
//     if (userName === undefined) {
//         console.log("Please add an username to log in");
//     }
//     return `${userName} just logged in`
// }

// console.log(userLoggedInMessage("Sudipta")); 

//let say user doesnot provide any username but we do not wants to make it undefined. For an example we can say this as an guest user so we can pass as a parameter userName = "user"

//-----------------------------

//lets pass an object as a parameter

// const user = {
//     userName : "sudipta",
//     userId : 125420,
//     emailId : "sudiptakhotel4@gmail.com"
// };

// function displayUser (myUser){
//     return `username is : ${myUser["userName"]} , userId is ${myUser["userId"]} , emailId : ${myUser["emailId"]}`
// }
// console.log(displayUser(user));
// console.log(displayUser({
//     userName : "rahul",
//     userId : 101,
//     emailId : "rahul@gmail.com"
// }));

//-------------------------------
//lets pass an array

// const arr = [10,20,78,90]
// function accessSecondElement(anyArr){
//     console.log(`${anyArr[1]}`);

// }
// accessSecondElement(arr)

//how to pass more than one arguments - we use rest operator
// function showAllCartPrice (...values){

//     return values; //this is going to return an array

// } 
// console.log(showAllCartPrice(100,200,600,800,900)); 

//spread and rare both declared as ... but we call them rest/spread based on the usecase