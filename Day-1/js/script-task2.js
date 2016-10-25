/*
1. Write a program that uses at least three ways to create an object variable,array variable
*/

(function(){

/*
Creating object variables

**/


//1. Using a function
function Apple(type,color){
  this.type = type;
  this.color = color;;
  this.getInfo = function(){
    return this.type +" "+this.color +" apple";
  }
}

var apple = new Apple('macintosh','reddish');
//console.log(apple.getInfo());




//2. Using object literals
var apple = {
  type:"macintosh",
  color:"reddish",
  getInfo:function(){
    return this.type +" "+this.color +" apple";
  }
}

apple.color = "red";
//console.log(apple.getInfo());


//3. Singleton using a function
var apple = new function() {
    this.type = "macintosh";
    this.color = "red";
    this.getInfo = function () {
      return this.color + ' ' + this.type + ' apple';
    }
}

apple.color = "reddish";
//console.log(apple.getInfo());




/*
Creating array variables

**/

//1.
var cars = new Array(3);
cars[0] = "Audi";
cars[1] = "BMW";
cars[2] = "Mercedes";

//2.
var cars = new Array('Audi','BMW','Mercedes');

//3.
var cars = ['Audi','BMW','Mercedes'];
console.log(cars)
})();
