//getter and setter --> Many time we do not any other to access our object's property directly or we want to return them in some encrypted way as we want . To do all of this stuffs we have getter and setter . 

//There is 3 syntax to use getter and setter .

// NEW SYNYAX - class

// class User{

//     constructor(email , password){
//         this.email = email;
//         this.password = password;
//     }

//     //getter and setter --> by default getter and setter are available for every property in class

//     get email(){
//         return this._email.toUpperCase();
//     }
//     set email(value){
//         this._email = value;
//     }
    
// }

// const user = new User("sudipta@gamil.com" , "abc");
// console.log(user.email);
// console.log(user.password);


//old way --> constructor function along with defineProperty()

// function User(email , password){
//     this._email = email;
//     this.password = password;

//     Object.defineProperty(this , "email" ,{
//         get(){
//             return this._email.toUpperCase();
//         },
//         set(value){
//             this._email = value;
//         }
//     })
// }

// const user = new User("sudipta@gmail.com" , "abcd")
// console.log(user.email);

//oldest --> using object

// const User = {
//     _email : "sudipta@khotel.com",
//     password : "abcde",

//     get email(){
//         return this._email.toUpperCase();
//     },
//     set email(value){
//         this._email = value;
//     }
// }

const newUser = Object.create(User);
console.log(newUser.email);