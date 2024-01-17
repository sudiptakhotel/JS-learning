//async-await>>promise>>callback hell

//above statement is obviously contextual
//async and await are both keywords inside js . async we use to make any function asynchronous and we only use await keyword inside async function.

//when we use await before a promise , await will stop all the other statement under the same asynct function untill the promise fullfilled.

// function getData(useId){
//     return new Promise( function(resolve , reject){
//         setTimeout( function(){
//             let flag = true;
//             if(flag){
//                 console.log("Data received for userId : ",useId);
//                 resolve("success");
//             }else{
//                 reject("failure")
//             }
            
//         } , 2000)
//     })
// }

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
// (async function(){
//     try {
//         await getData(1234); //1st call
//         //untill the first call fullfilled await will ensure no other execution starts.
//         const result = await getData(12345);
//         //console.log(result);      
//     } catch (error) {
//         console.log(error);
//     }
    

//     console.log("promise fullfilled");
// })();

//some nuances of async-await
//1 -> we need to wrap the inside code of async-await in try-catch block for error handleing
//2 -> async function can direct return a value , but that value will be returned as a Promise.resolve(value) . That means whenever async function returns value it returns a promise

//example

// async function getValue(){
    
//     return 23; //internal working -> return Promise.reslove(23);
// }
// getValue().then( function(res){
//     console.log("value comes" , res);
// })

//3 -> async/await makes code looks like sequential inside aysnc function . As we know untill the first promise fullfilled next statement or another prmoise will not excute . But if we want 2 promises to consume parallaly then we have to use Promise.all()

//example

function getData1(){
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            console.log("Data 1 fetched");
            resolve("successfully fetched data 1")
        } , 3000)
    })
}

function getData2(){
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            console.log("Data 2 fetched");
            resolve("successfully fetched data 2")
        } , 3000)
    })
}

//now I want to parallely consume both of these promise by using async/await

//----IIFE----
(async function(){
    //take both of the promises
    const result1 = getData1();
    const result2 = getData2();
    //these result1 and result2 are nothing but 2 promises and I want to consume them parallely
    try {
        const result = await Promise.all([result1,result2]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})();
//consumeParallely();