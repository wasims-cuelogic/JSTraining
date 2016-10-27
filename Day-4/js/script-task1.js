/*
Write a program to copy two objects. It should accept two arguments - source ( the object from which we need to copy) and target ( to which we need to copy). 
The target object will initially be empty.
*/

(function(){

  function completeAssign(target, sourceObj) {
    
    for (var key in sourceObj) {
      if (sourceObj.hasOwnProperty(key)) {
        target[key] = sourceObj[key];
      }
    }
  }

  var sourceObj = {
    fname:'Wasim',
    lname:'Sayyed',
    getFullName: function(){
      return this.fname+" "+this.lname;
    }
  }  

  var copy = {};

  console.log(sourceObj);

  completeAssign(copy, sourceObj);

  //copy.fname = 'Testing';

  console.log(copy);

})();
