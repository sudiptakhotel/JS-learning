//in 2015 under ES6 classes are introduced in js which is nothing but syntactic sugar and still behind the scene js works as prototype base language .

function Car(name , type){
    //this is use to refer current created object
    this.name = name;
    this.type = type;

    this.getDetails = function(){
        console.log("Basic introduction");
        console.log(`Name : ${this.name} , Type : ${this.type}`);
    }
    //if we not explicitlt return the object then also new keyword will ensure to resturn the created object
    //return this;

}

//creating a new instances of Car 
const bike = new Car("splendar" , "two wheeler");
console.log(bike.getDetails());