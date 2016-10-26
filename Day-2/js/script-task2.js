/*
1. Write a program that will do the following:
    1. Create a student class and then create multiple student objects out of it.
    2. Using a student object, add a method in the student class that will be then accessible from new objects created.*/

(function(){

  var Student = function(firstName){
    
    this.firstName = firstName;

    this.sayHello = function(){
      console.log('Hello !, I am '+this.firstName);
    }
  }

  var s1 = new Student('Alice');
  var s2 = new Student('Bob');

  s1.sayHello();
  s2.sayHello();

})();
