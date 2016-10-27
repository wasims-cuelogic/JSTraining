/*

Write a program to merge two objects. 
It should accept two arguments - objectA and objectB. 
The result object will have the combined values and should not change the structure of either objectA or objectB. 
If both objects have same properties, consider using objectA property instead.

*/

(function(){

  function merge(a, b) {

    var c = {};

    for (var key in a) {
      if (a.hasOwnProperty(key)) {
        c[key] = a[key];
      }
    }


    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        
        if(!c.hasOwnProperty(key))
          c[key] = b[key];
      }
    }

    return c; 
};


  var objectA = { a: 1, b: 8, c: 6 };
  var objectB = { e: 2, f: 2, b:6 };

  var objectC = merge(objectA,objectB);


  var objPen = {
    color:'Red',
    type: 'Ball Pen',
    company: 'Cello'
  };

  var objCar = {
    color:'Yellow',
    company:'BMW',
    model:'2008'
  };


  var resultObj = merge(objPen,objCar);

  console.log(resultObj);

})();
