/*

Extend number type to have a 'int()' function that will convert any given 'float' value to its integer equivalent. (a no such as 5.00 should become 5). 
The function should only return that value and should not affect the actual number's value.
*/

(function(){

  Number.prototype.int = function() {
      return Math.round(this.valueOf());
  };
  
  var n = 5.00;

  try{

    var x = n.int();  
    console.log(x);

  }
  catch(e){
    console.log(e.message);
  }
  
})();
