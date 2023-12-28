//Here we are going to see singleton object which is created using Object constructor

const obj1 = new Object(); // this is declared using constructor()
//there is no difference b/w constructor created object and literal except singleton thing

//lets add sone properties to our obj
obj1.id = 101;
obj1.emailId = "sudiptakhotel@gmail.com";

// console.log(obj);

const obj2 = new Object();
obj2.name = "sudipta";
obj2.empId = 10101;
obj2.addressDetails = {
    state: "WestBengal",
    city: "Howrah",
    pinCode: 711101

};

//lets merge these obj1 and obj2 by using as static method assign() . Best practice to mention a target{} it ensures the return will be sure object type

// const mergerObj = Object.assign({} , obj1 , obj2);
// console.log(mergerObj);

//another way which is more production proof is using spread
// const mergerObj = {...obj1 , ...obj2};
// console.log(mergerObj);

//get all the keys of object by using keys() static method and will return an array of keys
// console.log(Object.keys(obj1)); 
// //same as key we can get all value by values()
// console.log(Object.values(obj1));

//entries() --> it is going to return a matrix where each array is key and value

// console.log(Object.entries(obj1)[1]); // here I am accessing the  2nd element in the return array

//we can check a property is present or not in the object by using hasOwnProperty() which returns true/false
// console.log(obj1.hasOwnProperty('emailId')); //true

// const myObj = new Object();
// myObj.name = "messi";
// myObj.jersey = "10";
// console.log(myObj);
// myObj.name = "hugo";
// console.log(myObj);
// myObj = 10; this is not possible because myObj is declared as constant

//lets create some complex object with multiple layers of nesting
const nestingObj = {
    name : "sudipta",
    emailId: "sudiptakhotel4@gmail.com",
    address: {
        state: "westBengal",
        city: "Howrah",
        pinCode: 711101,
        location : {
            steet : "nabin senapati lane",
            landMark: "mansatala",
        }
    }
}

//lets print the landmark
// console.log(nestingObj["address"]["location"]["landMark"]);
// console.log(nestingObj.address.location.landMark);


