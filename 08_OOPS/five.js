//we will see class syntax here and see the behind the scene

// class User {
//     constructor(userName , email) {
//         this.userName = userName;
//         this.email = email;
//     }

//     //a method
//     showDetails(){
//         console.log(`username : ${this.userName} , email : ${this.email}`);
//     }
// }

// //inject a function to the User prototype

// User.prototype.greeting = function(){
//     console.log(`Hello ${this.userName}`);
// }

// //instace of User
// const user1 = new User("sudiptakhotel" , "sudiptakhotel4@gmail.com");

// user1.showDetails();
// user1.greeting();

//behind the scene
//in js OOPS concept is mostly syntactical sugar

function User(username , email){
    this.userName = username;
    this.email = email;

    this.logMe = function(){
        console.log(`I logged here`);
    }

}
User.prototype.showDetails = function(){
    console.log(`username : ${this.userName} , email : ${this.email}`);
}
User.prototype.greeting = function(){
    console.log(`Hello ${this.userName}`);
}

//instance
const user1 = new User("sudiptakhotel" , "skhothel@google.com");
user1.showDetails();
user1.greeting();
user1.logMe();