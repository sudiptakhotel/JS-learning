// //here we are going to see what is callback and what is callback hell

// //callback -> when a function is passed as an argument inside a function that is call callback

// //example

// function productOfNumber(num1 , num2 , callback){
//     const result = num1 + num2;
//     console.log(`Result : ${result}`);

//     if(callback){
//         callback();
//     }
    
// }
// // function displayResult(result){
// //     console.log(`Result : ${result}`);
// // }

// productOfNumber(4,5,()=>{
//     console.log("Displayed result above");
// });


//now lets understand callback hell
//call back hell happens when there is a callback deep nesting which makes the code looks super complex and unreadble

// function getDetails(dataId , callback){
//     setTimeout(()=>{
//         console.log(`data fetched for id - ${dataId}`);
//         if(callback){
//             callback();
//         }
//     } , 2000)
    
// }
//what is happening here these 3 functions calls has ended at the same time means after 2sec. So we get below output at the same time

// data fetched for id - 100
// data fetched for id - 200
// data fetched for id - 300

// getDetails(100); 
// getDetails(200);
// getDetails(300);
// console.log("data fetching is going..../");

//But now I want that each of this output will wait for the previous data to get and then will execute

// getDetails(100 , ()=>{
//     getDetails(200 , ()=>{
//         getDetails(300)
//     } );
// });
// console.log("data fetching is going");

//this is called callback hell / pyramid of doom and it is really bad practice to write code in this way . Deleoper feels difficulty to understand this code .

//Now to handle this callback hell we have promises. Callback is good to use but not callbackhell.

function getDetailsFromDb(uesrId , nextCall){
    setTimeout( () =>{
        console.log("data fetched for id : " , uesrId);
        if(nextCall){
            nextCall();
        }
        nextCall;
    } , 3000)
}
// getDetailsFromDb(111 , ()=>{
//     getDetailsFromDb(222 , ()=>{
//         getDetailsFromDb(300)
//     });
// });
// getDetailsFromDb(222);

//lets solve this by using promise
function getPromise(userId){
    return new Promise(function(resolve , reject){
        setTimeout( ()=>{
            console.log("data fectched for: " , userId);
            resolve("success");
        } , 3000)
    })
}
// getPromise(111)
// .then( (res)=>{
//     console.log(res);
//     getPromise(222)
//     .then( ()=>{
//         console.log(res);
//         getPromise(333)
//         .then(()=>{
//             console.log(res);
//         })
//     })
// })

//another way of writing consume and it is more professional w.r.t promise chaining
// getPromise(1234)
// .then( ()=> {
//     //that mean when getPromise(1234) resolve then call for next 
//     return getPromise(12345);
// })
// .then((res)=>{
//     console.log(res);
// })






