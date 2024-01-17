//async-await>>promise>>callback hell

//above statement is obviously contextual
//async and await are both keywords inside js . async we use to make any function asynchronous and we only use await keyword inside async function.

//when we use await before a promise , await will stop all the other statement under the same asynct function untill the promise fullfilled.

function getData(useId){
    return new Promise( function(resolve , reject){
        setTimeout( function(){
            let flag = true;
            if(flag){
                console.log("Data received for userId : ",useId);
                resolve("success");
            }else{
                reject("failure")
            }
            
        } , 2000)
    })
}

//consume promise by await
// await getData(1234);  SyntaxError: await is only valid in async functions -> await can only be used inside a async function

//right way to consume a Promise by async-await
// async function consumeData(){
//     try {
//         await getData(1234); //1st call
//         //untill the first call fullfilled await will ensure no other execution starts.
//         const result = await getData(12345);
//         //console.log(result);      
//     } catch (error) {
//         console.log(error);
//     }
    

//     console.log("promise fullfilled");
// }
// consumeData();

//There is small catch in aync await . If we campare with promise or callback there we don't need any function to write and then call that function to consume promise. But in async-await we know we need to write function and then one time we need to execute that . We can avoid this one time unnecessary function call by using IIFE - Immidiately invoked function expression

//----IIFE -----
(async function(){
    try {
        await getData(1234); //1st call
        //untill the first call fullfilled await will ensure no other execution starts.
        const result = await getData(12345);
        //console.log(result);      
    } catch (error) {
        console.log(error);
    }
    

    console.log("promise fullfilled");
})();