//Here we are going to learn array in js language
//declaration
let arr = [20,30,40,50];
// console.log(typeof(arr)); //object type

//characteristics of js Array :
//1-> js array is dynamic in size and it can store different data types in a single array
//2-> we can only access element in array by index . Array is 0-indexed
//3-> when we make a copy of arry in js it makes shallow copy . It happens with every object's copy in array.

//+++++++++++++++++++++++FUNCTIONS+++++++++++++++++++++++++

//at() --> it is used to get an item by giving index of it . It works same as [] brcket notation of accvesing element in array . But in at() we can give -index and it will access the element from back of the array . This negative index access property is not avilable in [] bracket notation

// console.log(arr.at(-1)); --> accessing last element

//--------------------------------

//concat() -> concat arrays
// let arr1 = new Array(60,70,80,90);
// console.log(arr1.concat(arr));

//-----------------------------------

//copyWithin --> it allows us to copy element inside the array and move those copied element from one index to another index
//parameters - target (where to copy) , start (first copied element) , end (exclusive)

// let arr2 = ["sudipta" , "khotel" , "rahul", "camelia" ,"mimi"];
// console.log( "A" , arr2);
// console.log("B" , arr2.copyWithin(0, arr2.length-1));
// console.log("C" , arr2);

//understand that answer B and C will be same because it makes shallow copy when we use copyWithin() . So as per the shallow copy definition source and copied object both will be changed

//--------------------------------------------------------
//fill() --> it fills the array with desired element from start to end(exclusive) specified .
// let arr3 = [30,50,68789,false,true];
// console.log(arr3.fill(true , 3));

//------------------------------------------------
//filter() -- > it filters the element in the array as define by the function . It makes the shallow copy

// let arr4 = ["messi" , "neymar" ,"ronaldo" ,"pedri"];
// console.log("A" , arr4);
// console.log("B" , arr4.filter(player => player.includes("neymar")));

//------------------------------------------------

//includes() --> verifies whether the element is present in the array or not . startIndex is optional.
// let arr5 = ["hugo" ,"dimi" ,"manvir" , "hector"];
// console.log(arr5.includes("hugo" , 0));

//--------------------------------------------

//indexOf() --> return the index of searched element . startSearchIndex is optional
// let arr6 = ["hugo" ,"dimi" ,"manvir" , "hector"];
// console.log(arr6.indexOf("dimi" , 1));

//-----------------------------------------------
//join() --> it concatinate all of the array items into string separated by a comma if separator not specified
// let arr5 = ["hugo" ,"dimi" ,"manvir" , "hector"];
// console.log(arr5);
// console.log(arr5.join("=>"));

//-----------------------------------------------
//push() --> it pushes items from the back 
// let arr5 = ["hugo" ,"dimi" ,"manvir" , "hector"];
// console.log(arr5.push("vishal")); //return length of the new array
// console.log(arr5);

//---------------------------------------------
//pop() --> it pop out elements from the back
// let arr5 = ["hugo" ,"dimi" ,"manvir" , "hector"];
// console.log(arr5.pop()); returns which element got pop out
// console.log(arr5);

//----------------------------------------
//unshift() --> add elements from the begining
// let arr5 = ["hugo" ,"dimi" ,"manvir" , "hector"];
// console.log(arr5.unshift("anwar")); //return length of the new array
// console.log(arr5);

//-----------------------------------------
//shift() --> delete element from the begining
// let arr5 = ["hugo" ,"dimi" ,"manvir" , "hector"];
// console.log(arr5.shift());

//-------------------------------------------
//reverse() -- > reverse the array
// let arr5 = ["hugo" ,"dimi" ,"manvir" , "hector"];
// console.log(arr5.reverse());

//----------------------------------------------
//slice() --> it slices the array by given start and endIndex(optional) . **But it never changes the original array
// let arr5 = ["hugo" ,"dimi" ,"manvir" , "hector"];
// console.log("A" , arr5.slice(1));
// console.log("B" , arr5);

//-------------------------------------------------
//splice() -- It changes the main array . This is the diffence between slice() and splice()
// let arr5 = ["hugo" ,"dimi" ,"manvir" , "hector"];
// console.log("A" , arr5.splice(1));
// console.log("B" , arr5);

//-----------------------------------------------
//isArray() -> checks whether the passed value is an array or not
// console.log(Array.isArray([3,4]));

//---------------------------------
//of() --> creates an new array with passed value
// let score1 = 10;
// let score2 = 10;
// let score3 = 10;
// let newArr = Array.of(score1 , score2 , score3);
// console.log(newArr);

//---------------------------------
//from() --> creates an aray from passed value
// let newArr = Array.from([10 ,20 , 30]);
// console.log(newArr);

//-----------------------------------

//spread --> use to spread the elements of the array . Widely used to concatinate any number of arrays 

// let playerSet1 = ["messi" , "neymar" , "benzema" , "haland"];
// let playerSet2 = ["mbaape" , "ronaldo" , "bale" , "pedri"];
// //lets concatinate these 2 arrays by using spread
// console.log([...playerSet1 , ...playerSet2]);

//--------------------------------
//flat() --> it allows to flat the array by any mentioned depth
// let newArr1 = [1,2,3,4 , [5,6,7], 8,9 , [10,11,[12,13]]];
// console.log(newArr1.flat(Infinity));
