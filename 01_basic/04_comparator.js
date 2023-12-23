//Here we are going to see how comparison works in JS

//> , < , >= , <= , ! , == these are the common comparator for all the languages

//but interisting things happens when we try to compare diff datatypes in JS

//Here JS will convert this "2" to Number and then compare
// console.log("2" > 3); 
// console.log("2" == 2);

// compare with null 

/*in JS comparator and equality check's syntax are different
in comparator JS converts null to 0 and then compares but in equality check it never converts the null

*/

// console.log(null > 0); // false
// console.log(null == 0); //false
// console.log(null >= 0); // true

//check with undefined
//here whatever the operation we perform all the cases are false
// console.log(undefined > 0); //false 
// console.log(undefined == 0); //false
// console.log(undefined <=0); //false

//check with boolean
// console.log(true == 1); //true
// console.log(true >= 1); //true
// console.log(true > false); //true

//check with NaN
//Here also alloperations gives false
// console.log(NaN > 0);
// console.log(NaN == 0);
// console.log(NaN <=0);

//strong check by ===
//so when we use === instead of == it checks for datatypes also
console.log("5" === 5); //false -> because checks happen b/w String and Number





