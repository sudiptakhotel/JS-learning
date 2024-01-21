//class inheritance
// class User {
//     constructor(username , password){
//         this.username = username;
//         this.password = password
//     }

//     //method
//     showDetails(){
//         console.log(`username : ${this.username} , pasword : ${this.password}`);
//     }
// }

// //inheritance by using extends keyword

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


//behind the scene

function User (username , password){
    this.username = username;
    this.password = password;

    
}
User.prototype.showDetails = function(){
    console.log(`username : ${this.username} , pasword : ${this.password}`);
}
User.prototype.logDetails = function() {
    console.log(`detals logged successfully`);
}


function Admin(username , password , email){
    //username and password is set from User
    User.call(this , username,password);
    this.email = email;

    
}

Object.setPrototypeOf(User , Admin);

const admin1 = new Admin("sudipta" , 101 , "sk@google.com");
admin1.showDetails();
//need to understand how to make it happen
