/*
Write a function that will accept a single dimensional array whose value will be like ['00','01','11','10','11','00'] and break it into a 2 dimensional array like the following:
[
        [0,0,1,1,1,0]
        [0,1,1,0,1,0]
    ]
    the  length of array can be dynamic and contain as many values as possible
*/

(function(){

    var arr =  ['00','01','11','10','11','00','23','45'];
    
    var fArray =[];
    var sArray =[];
    var resultArray = [[]];

    for (var i = 0; i < arr.length; i++) {        

        fArray.push(Math.floor(arr[i]/10));
        sArray.push(arr[i]%10);            
    }

    resultArray[0] = fArray;
    resultArray[1] = sArray;

    console.log(resultArray);

})();
