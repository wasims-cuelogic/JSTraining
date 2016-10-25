/*
1. Write a program to create variables of the following types:
    int
    string
    boolean
    object
    array
then add values in array(can be value of any type). Delete values from the array using array built in methods.
Toggle values of boolean variables
Concatenate string with more values(without creating new string variables)
*/

(function(){

  var length = 10;                               // Number
  var firstName = "Wasim";                      // String
  var cars = [];           // Array
  var x = {firstName:"Wasim", lastName:"Sayyed"};    // Object
  var boolVar = true;

  // Add values in array
  cars.push('BMW');
  cars.push('Mercedes');
  cars.push('Audi');
  cars.push('Volkswagen');
  cars.push('Maruti');

  // Remove values from array
  cars.splice( 0, 1 ); // Removes the first element
  cars.pop(); // Removes the last element
  cars.shift();            // Removes the first element
  delete cars[0];           // Changes the first element undefined

  //Toggle boolean value
  boolVar = !boolVar;

  //Concatenate string with more values
  firstName = firstName + " Sayyed";

})();
