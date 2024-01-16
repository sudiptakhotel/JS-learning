const promiseTest = new Promise(function(resolve , reject){
    //async task
    setTimeout(function() {
        let flag = true;
        if(flag){
            resolve("network connection completed")
        }else{
            reject("network connection not completed");
        }
    } , 1000)
})

//consume promiseOne
promiseTest
.then(() => {
    throw new Error("error occured");

    console.log("Do this");
})
.catch(() => {
    console.log("ERRRRRRRR");
})
.then(() => {
    console.log("Final then block");
})