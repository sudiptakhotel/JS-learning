//we will see 3 syntaxses callback , promise and async/await

// function getDataFromDb(userId , nextCall){
//     //but it takes 3sec to fetch the data from DB
//     setTimeout(function(){
//         console.log("data fetched for id " , userId);
//         if(nextCall){
//             nextCall();
//         }
//     } , 3000)
// }

// //callback
// //getDataFromDb(111);

// //callback hell
// console.log("getting data1....");
// getDataFromDb(111 , ()=>{
//     console.log("getting data2...");
//     getDataFromDb(222 , ()=>{
//         console.log("getting data3...");
//         getDataFromDb(333)
//     });
// })


//doinng the same thing with Promise()

// function getDataFromDb(userId){
//     //let suppose it returns a Promise()
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("data fetched for id ", userId);
//             resolve("success");
//         } , 3000)
        
//     })
// }
// getDataFromDb(111)
// .then(function(){
//     return getDataFromDb(222)
// })
// .then(function(res){
//     return getDataFromDb(333);
// })
// .then(function(res){
//     console.log(res);
// })

//using async/await

function getDataFromDb(userId){
        //let suppose it returns a Promise()
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("data fetched for id ", userId);
                resolve("success");
            } , 3000)
            
        })
    }
    
    (async function(){
        await getDataFromDb(111);
        await getDataFromDb(222);
        const result = await getDataFromDb(333);
        console.log(result);
    })();
    //consumeData();