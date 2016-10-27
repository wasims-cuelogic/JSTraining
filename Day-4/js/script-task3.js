/*

Extend number type to have a 'float()' function that will convert any given 'integer' value to its float equivalent. 
(a no such as 5 should become 5.00) The function should only return that value and should not affect the actual number's value.

*/

(function(){

  Number.prototype.float = function() {
      return this.valueOf().toFixed(2);
  };



  var n = 5;

  try{

    var x = n.float();  
    console.log(x);

  }
  catch(e){
    console.log(e.message);
  }
  
})();
