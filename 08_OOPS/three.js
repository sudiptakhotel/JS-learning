//here we are going to see prototype , inheritance and how js is using sugar coating by giving class , inheritence or other OOPS concept

//so as we know everything in js is treated as an object and also we know object has protype which is basically use in inheritance means prototype chaining

//We can set any property or method inside prototype of any object such as Array , String , function etc.

//Everything is pass from Object in js so if we create an array , string or function or any other object by default they have the access of Object's prototype

//We can create and inject any propety or method to any object's prototype

//I want to add a method in String object which will be available whenever I create any String

//I will go inside the prototype of String and declareMe() method

// String.prototype.display = function(){
//     //here this is used to give current context that means "jisne bulaye unko"
//     console.log(`The string is ${this}`);
// }

// const myName = "Rahul";
// myName.display(); //this is available

//Inheritance - > parent child property

//we can by pass any other object's property to other by 
//old ways - __proto__

const user = {
    userName : "user@user.com",
    password : 12345,

    getDetails : function(){
        console.log(`userName : ${this.userName} , passWord : ${this.password}`);
    }
};

const guest = {
    isGuest : true,
    //__proto__ : user
}
const signedIn = {
    isSignedIn : true,
    //__proto__ : user
}

//if I want my guest and signedIn can get access of the properties of user

 //guest.getDetails(); //getDetails is not defined inside guest

 //modern way of inheritance - setPrototypeOf()

//  Object.setPrototypeOf(guest , user);
//  guest.getDetails();

// Object.prototype.hello = function(){
//     console.log("Hello");
// }

// const myArr = [1,23,45];
// myArr.hello();
// "rahul".hello();

