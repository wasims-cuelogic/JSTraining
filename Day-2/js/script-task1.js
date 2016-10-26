/*
1. Write a program to create functions that will do the following 
    1. Add 2 numbers
    2. Subtract 2 numbers
    3. Divide 2 numbers
    4. Multiply 2 numbers
    Then update the program to get dynamic no of arguments(there can be 2,3,4 etc no of variables passed in when invoking the functions) The function should accept at least 2            variables and throw error if less then 2 are passed. The function should also validate the type of argument passed in

    **/

(function(){

  //Add
  function add(){
    
    var sum = 0;

    if(arguments.length < 2){
      alert('Please pass at least 2 parameters');
      return;
    }
    
    for (var i = 0; i < arguments.length; i++) {

      if(isNaN(arguments[i])){
        alert('Please enter only numbers');
        return;
      }                
    }

    sum = parseInt(arguments[0]) + parseInt(arguments[1]);
    console.log("Addition: "+sum);
    
  }


  //Subtract
  function subtract(){

    var sub;

    if(arguments.length < 2){
      alert('Please pass at least 2 parameters');
      return;
    }
    
    for (var i = 0; i < arguments.length; i++) {

      if(isNaN(arguments[i])){
        alert('Please enter only numbers');
        return;
      }                
    }

    sub = parseInt(arguments[0]) - parseInt(arguments[1]);

    console.log("Subtraction: "+sub);

  }

  //Divide
  function divide(){

    var div;

    if(arguments.length < 2){
      alert('Please pass at least 2 parameters');
      return;
    }

    for (var i = 0; i < arguments.length; i++) {

      if(isNaN(arguments[i])){
        alert('Please enter only numbers');
        return;
      }                
    }

    div = parseInt(arguments[0]) / parseInt(arguments[1]);

    console.log("Division: "+div);
    
  }

  //Multiply
  function multiply(){

    var mul;

    if(arguments.length < 2){
      alert('Please pass at least 2 parameters');
      return;
    }
    
    for (var i = 0; i < arguments.length; i++) {

      if(isNaN(arguments[i])){
        alert('Please enter only numbers');
        return;
      }                
    }

    mul = parseInt(arguments[0]) * parseInt(arguments[1]);

    console.log("Multiplication: "+mul);
  }

  add(3,10,10);
  subtract(10,3);
  divide(9,3);
  multiply(10,3);

})();
