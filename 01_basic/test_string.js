//Prtactice different string function

let str = "Messi is the best football player in the world";
// console.log(str.at(0));
// console.log(str.charAt(4));

let str1 = "𠮷𠮾";
// console.log(str1.charAt(1)); --> it will not work to know why check 06_string.js

//then how to get this ?
// console.log(String.fromCodePoint(str1.codePointAt(0)));

// let word = "football";

// console.log(`The word ${word} ${str.includes(word) ? "is present" : "is not present"} in the ${str}`); 

// let myName = "Rahul";
// console.log(`after provide padEnd() --> ${myName.padEnd(10,".").concat("khotel")}`);

// let phrase = "I am very happy";
// let wordToBeRepeated = "very "
// console.log(`I am ${wordToBeRepeated.repeat(3)} happy`);

// console.log(str.replace("world","universe"));

console.log(str.search("world"));
