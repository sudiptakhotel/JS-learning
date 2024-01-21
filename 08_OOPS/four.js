//here we are going to call() method

function setUsername(username){
    this.username = username;
    console.log("called");
}

function createUser(username , email , password){

    //I want to outsource the job to set the username from setUsername() function

    setUsername.call(this ,username);

    this.email = email;
    this.password = password;
}

//creating an instance of the createUser()

const user1 = new createUser("rahul" , "rahul@rahul.com" , 123456);
console.log(user1);

//As we know in js we have call stack where every function is call is stack upon one another . And whenever the execution of a function is done then that function and inside of that whatever variable is present going to deleted or garbage collected . So , if we want to call a function inside another function body and we want to get the values from called function we need to use call() method . 

//why we are passing this in the argument of call() ?
//because we are telling our called function to set the variable on the calling contecxt means calling this not in your this means called this . 