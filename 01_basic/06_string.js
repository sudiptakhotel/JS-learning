//Here we are going to cover important String functions
//2 ways to declare String
//1st
let myNickName = "Rahul";
//2nd
let myRealName = new String("Sudipta Khotel");

//to concatinate String this backtick with ${} is the modern way of writing code

// console.log(`${myNickName.charAt(0).toLowerCase()}${myNickName.substring(1)} khotel`); 

// here the real value not change because we know string is a primitive data type and it is stored in Stack. When we retrive value from stack memory we will get copy the variable not the real variable

//------------different String function----------

//at() --> it takes an integer input and returns string value present at that index . If no string found at given index it will return undefined

// function findLastCharacter(input){
//     console.log(`The last character of the given input is : ${input.at(-1)}`); //it takes relative index as well means negative index here . Negative indexing starts from back . 

// }
// findLastCharacter("sudipta khotel"); //op --> l
//-----------------------------------------------

//charAt() --> it takes an integer input and gives string value at a given index . It never takes negative input . 

// let str = "sudipta khotel";
// let index = -1;
// console.log(`At the given index ${index} this chracter is present ${str.charAt(index)}`);

//  let str = new String("𠮷𠮾"); // this is object type
// // let str = "𠮷𠮾";
// console.log(typeof(str));
// console.log(str.charAt(0)); //it will not return proper String present at the given index because the input is not a valid unicode character . To get the value properly use below funtion
// console.log(String.fromCodePoint(str.codePointAt(0))); // o/p -->𠮷


//-----------------------------------------

//charCodeAt() --> it takes index as an iput and returns the unicode UTF-16 code of the character

// let str = "virat kohli";
// console.log(str.charCodeAt(5));

// let str = "𠮷𠮾";
// console.log(str.charCodeAt(0));

//-----------------------------
//codePointAt() --> it will work same as charCodeAt() with the velues which are not valid unicode

// let str = "😅😅😅😅";
// console.log(str.codePointAt(0));

//----------------------------------------

//fromCodePoint() - > construct string based on the sequence of unocode 
// let str = "𠮷𠮾";

// console.log(String.fromCodePoint(str.codePointAt(0)).concat(String.fromCodePoint(str.codePointAt(1))));
// console.log(String.fromCodePoint(65 , 66)); //O/P --> AB

//-------------------------------

//endsWith() -- > it takes String as input and verifies whether the input is present at the end of the String or not

// let myName  = "Sudipta Khotel";
// console.log(myName.indexOf("l"));
// console.log(myName.endsWith("l", 14));

//-------------------------------
//includes() --> its verify whether the given string input is present or not . CASE SENSITIVE check
// let input = "Messi is the best football player in world";
// let wordToBeSearched = "cricket";
// console.log(`The word ${wordToBeSearched} ${input.includes(wordToBeSearched) ? "is present" : "is not present"} in the input`);

//----------------------------
//isWellFormed() --> it verifies whether a string has any loan surrogates or not .

// let str = "🥳🥳🥳🥳";
// console.log(str.isWellFormed());

//------------------

// lastIndexOf() --> it returns the last occured index of a given String
// let myName = "Sudipta Khotel";
// console.log(myName.lastIndexOf("K"));

//------------------------

//padEnd() --> it will give a padding of given String with required maximum lenght and string

// let strWithOutPad = "Sudipta";
// let strWithPad = strWithOutPad.padEnd(10 , ".")
// console.log(strWithPad);

//----------------------------
//repeat() --> repeat a value by given number of times
// let mood = "very ";
// console.log(`I am ${mood.repeat(3)} happy`);

//------------------------------
//slice() --> slice the given string with given start and end index . endIndex is not included
// let str = "Sudipta Khotel";
// console.log(str.slice(0,7));
// console.log(str.slice(-6));

//---------------------------
//split() --> it splits the the string by a given separator like space comma etc and return array . We can also limits the array size

// let str = "My name is Sudipta Khotel";
// let arr = str.split(" ");
// console.log(`name : ${arr[arr.length-2]}`);

//----------------------------
//startsWith() --> it verifes if the String is started with the given input String . 

// let phrase = "I am a strong man";
// console.log(phrase.startsWith("I am b"));

//------------------------------------------------


//substring() -- > this function is used to get the desired part of string by using startindex and endIndex . Although endIndex is not mandatory . 

//to see th diff b/w substring() and slice() please visit documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring#differences_between_substring_and_slice

// let myName = "Sudipta Khotel";
// // console.log(`substring() --> ${myName.substring(8)}`);

// function nameSplitter(name){
//     let firstName = name.split(" ")[0];
//     let lastName = name.split(" ")[1];
//     console.log(`firstName : ${firstName}`);
//     console.log(`lastName : ${lastName}`);
// };
// nameSplitter("Sudipta Khotel");

//------------------------------------

//toLocaleLowerCase() --> it converts the String to lowercase String based on give locale language specific

// let place = "İstanbul";
// console.log(`place name in english US - ${place.toLocaleLowerCase("en-us")}`);

//--------------------------------------
// trim() --> it trims whitespace from both the end . for specific end trimming we have trimStart() and trimEnd()
// let emailID = "     sudiptakhotel4@gmail.com  "
// console.log(`emailId : ${emailID.trim()}`);

//------------------------------
//search() --> it searches the string in the desired string and returns the first index of the match found

// let str = "Messi is GOAT"
// console.log(str.search("GOAT"));