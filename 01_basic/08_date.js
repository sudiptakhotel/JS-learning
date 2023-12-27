//Here we are goibng to explore Date object
//how to declare a date
let myDate = new Date("2023-12-27 10:55");
// console.log(myDate);
// console.log(myDate.toString());
// console.log(`${myDate.getDate()}`);
// console.log(`${myDate.getDay()}`);
// console.log(`${myDate.getFullYear()}`);
// function calculateTime(){
//     let start = new Date();
//     for (let i=0 ; i<10000 ; i++){
//         Math.sqrt(i);
//     }
//     let end = new Date();
//     console.log(`so the time taken is : ${end.getTime() - start.getTime()} ms`);
// }
// calculateTime();

// console.log(Date.now());

// let newDate = new Date();
// let myDate1 = newDate.toLocaleString("default" , {
//     weekday : "long",
//     day : "2-digit",
//     month : "long"
// })
// console.log(myDate1);

// let myBirthDay = new Date("2000-02-06");
// //lets get all the details of this day along with customize format
// let formatBirthDay = myBirthDay.toLocaleString("default" , {
//     weekday : "long",
//     day : "numeric",
//     month : "long",
//     year : "numeric"
// })
// console.log(formatBirthDay);