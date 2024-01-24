//inheritance of object using __proto__ 

//objective - User is going to the parent and guest's and signedIn's instances is going to inherit the properties of User . 

//way1 - using constructor function

// function user(username , email){
//     this.username = username;
//     this.email = email;

//     this.details = function(){
//         console.log(`username - ${this.username} , email - ${this.email}`);
//     }
// }

// user.prototype.greetings = function(){
//     console.log(`Hi , welcome`);
// }

// const guest = {
//     isGuestUser : true
// }

// //user1->guest1

// const user1 = new user("username" , "username@username.com");
// //first of all guest object should inherit from user1
// guest.__proto__ = user1;
// const guest1 = Object.create(guest);
// guest1.greetings();
// guest1.details();

//way2 - usisng class syntax which is more modern

class User{
    constructor(username , email){
        this.username = username;
        this.email = email;
    }
    details(){
        console.log(`username : ${this.username} , email - ${this.email}`);
    }
}
User.prototype.greetings = function(){
    console.log(`Hi welcome`);
}

const guest = {
    isGuestUser : true
}

const user1 = new User("username" , "username@username.com");

Object.setPrototypeOf(guest , user1);

const guest1 = Object.create(guest);
guest1.greetings();
guest1.details();
console.log(guest1.isGuestUser);
