//Here we are going to cover everything regarding String
//2 ways to declare String
//1st
let myNickName = "Rahul";
//2nd
let myRealName = new String("Sudipta Khotel");
console.log(`${myNickName.charAt(0).toLowerCase()}${myNickName.substring(1)} khotel`); // here the real value not change because we know string is a primitive data type and it is stored in Stack. When we retrive value from stack memory we will get copy the variable not the real variable

