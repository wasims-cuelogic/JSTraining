/*
Update program - 2 of Practicals Day 2 to add a method that will print name (called printName()) of each student object in its prototype.
*/

(function(){

  var Student = function(firstName){
    
    this.firstName = firstName;
        
  }

  Student.prototype.printName = function(){
    console.log('Hello !, I am '+this.firstName);
  }

  var s1 = new Student('Alice');
  var s2 = new Student('Bob');

  s1.printName();
  s2.printName();

})();
