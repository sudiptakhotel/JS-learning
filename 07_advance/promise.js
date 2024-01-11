//define promise in various way
//storing in a variable
const promiseOne = new Promise(function (resolve , reject){
    //lets do an async task
    setTimeout(function(){
        let isConnected = true;
        if(isConnected) {
            console.log("Async task : DB is connected");
            resolve();
        }else reject("ERROR : SOMETHING WENT WRONG...")
        
    } , 1000)
})
promiseOne.then(function(){
    console.log("Fetch successfully user details");
}).catch(function(error){
    console.log(error);
})

console.log("Processing.....//");

//without storing in a variable

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task 2 is completed");
        resolve({userName : "Sudipta" , userId : 100100});
    } , 2000)
}).then(function(user){
    console.log(user);

})

//thenable
const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("USER DATA ALREADY PRESENT IN DB");
        resolve({name : "rahul" , password : 1234});
    } , 2000)
    
})

//consume the promise
const userDetails = promiseThree.then(function(user){
    // console.log(`Hi ${user.name} this is your old pass - ${user.password}`);
    return user.name;
}).then((username)=>{
    console.log(`username - ${username}`)
})

console.log(userDetails);