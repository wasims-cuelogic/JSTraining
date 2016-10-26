/*
1. Write a program to calculate factorial using recursive strategy.
*/

(function(){

  // Using function expression
  var fact = function fac(n) { return n < 2 ? 1 : n * fac(n-1) };

  
  //Using funtion declaration
  function factorial(n){
    if ((n === 0) || (n === 1))
      return 1;
    else
      return (n * factorial(n - 1));
  }

  console.log(factorial(5));
  console.log(fact(5));

})();
