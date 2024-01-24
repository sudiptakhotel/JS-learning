//class inheritance
//class User {
//     constructor(username , password){
//         this.username = username;
//         this.password = password
//     }

//     //method
//     showDetails(){
//         console.log(`username : ${this.username} , pasword : ${this.password}`);
//     }
// }

// // //inheritance by using extends keyword

// class Admin extends User {
//     constructor(username , password , email){

//         /* to access the User constructor we have super()       keyword . Before this ES6 we need to use call() . super() takes care of all of this call() functioanlity BTS . 
//         */

//         super(username , password);
//         this.email = email;

//     }

//     logDetails(){
//         console.log(`details logged successfully`);
//     }
// }

// //creating an instance of Admin
// const admin1 = new Admin("messi" , "messi@101" , 122356);
// admin1.showDetails();
// admin1.logDetails();

// const user1 = new User("ronaldo" , "ronaldo@07");
//user1.logDetails(); //this is not possible because it is reverse inheritance and that is not possible.


//behind the scene --> js prototypal behavior
function user(username , password){
    this.username = username;
    this.password = password;

    this.showDetails = function(){
        console.log(`username : ${this.username} , password : ${this.password}`);
    }
}

user.prototype.logMe = function(){
    console.log(`Logged details successfully`);
}

function admin(username , password , email){
    //username and password is going to set from user , will use call()
    user.call(this , username,password);
    this.email = email;

}


//interesting part
//prototypal chaining
admin.prototype = Object.create(user.prototype);
admin.prototype.logAdmin = function(){
    console.log(`email - ${this.email}`);
}
admin.prototype.constructor = admin;

const admin1 = new admin("messi" , 10 , "goat@goat.com");
admin1.showDetails();

console.log(admin1.constructor);
admin1.logAdmin();
