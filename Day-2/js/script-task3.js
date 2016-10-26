/*
1. Write a program that will do the following:
    1. Create a student class and then create multiple student objects out of it.
    2. Using a student object, add a method in the student class that will be then accessible from new objects created.*/

(function(){

  var obj = {};

  obj["abstract"] = "Reserved \"abstract\" keyword";
  obj["arguments"] = "Reserved \"arguments\" keyword";
  obj["boolean"] = "Reserved \"boolean\" keyword";
  obj["break"] = "Reserved \"break\" keyword";
  obj["byte"] = "Reserved \"byte\" keyword";

  console.log(obj.abstract);
  console.log(obj.arguments);
  console.log(obj.boolean);
  console.log(obj.break);
  console.log(obj.byte);

})();
