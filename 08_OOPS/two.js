//here we are going to see the power of new keyword in js . 
//we will write a constructor fucntion and by using new we will create object of the constructor function 

function createPlayer(playerName , jersey){
    this.playerName = playerName;
    this.jersey = jersey;

    this.getDetails = function(){
        console.log(`player : ${this.playerName} jersey : ${this.jersey}`);
    }
}

//now as we know function is also an object in js so we will get its prototype as other object

//so I want to add some method into the prototype of the createPlayer() so that other instances which is created by using new can use them

//this showMe() is a shared method and can be used by other instances of createPlayer() , because when we intialize a function by new keyword new make linking of newly created object's prototype to it's parent means here createPlayer() prototype . In this way protypy chaining or inheritence establishes so newly created object get access of the createPlayer() properties and method and properties or method which are injected inside protptype.

createPlayer.prototype.showMe = function(){
    console.log(`Player jersey number is : ${this.jersey}`);
}

//creating instance of the createPlayer()
const player1 = new createPlayer("Lionel Messi" , 10);
console.log(player1.getDetails());
console.log(player1.showMe());

