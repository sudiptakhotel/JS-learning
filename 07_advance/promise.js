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
promiseThree.then(function(user){
    // console.log(`Hi ${user.name} this is your old pass - ${user.password}`);
    return user.name;
}).then((username)=>{
    console.log(`username - ${username}`)
}).finally(()=>console.log("The promise has been resolved or rejected"))

//console.log(userDetails);

//so there is another way to consume promise except then() catch() . The way is async await

//lets create a promise and consume this with async() await
const promiseFour = new Promise(function(resolve , reject){
    //async task
    setTimeout(function(){
        let isConnected = false;
        if(isConnected){
            resolve({playeName : "Lionel Messi" , jersey : 10});
        }else{
            reject("Player details not found")
        }
    },1000)
})

//to consume this promiseFour we will use async() await

async function consumePromiseFour(){
    //taking the response of promise
    //there is an issue with async await that here we need to manually handle error by wrapping code in try-catch block.
    try {
        const response = await promiseFour;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFour();

// lets read API by async await
// here we are going to make a network call which is our async task and will read that

async function getUserDetails(){
    //here to get the response by fetch().
    //fetch() always returs promise so we need to await for this
    const data = await fetch("https://randomuser.me/api/");
    //converting data to JSON
    const jsonData = await data.json();
    console.log(jsonData);
    
}
getUserDetails();

//read the data by then() catch()

fetch("https://randomuser.me/api/")
.then((response) =>{
    return response.json();
})
.then((data)=>{
    console.log(`Name : ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`);
    console.log(`Gender : ${data.results[0].gender}`);
    console.log(`City : ${data.results[0].location.city}`);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("FINISHED");
})