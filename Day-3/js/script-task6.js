/*
1. Write a program to do the following:
    1.1 Create an array and add numbers 1 to 100 in it
    1.2. Print each element of that array in a new line WITHOUT using any loop structure.
*/

(function(){

    var arr = new Array(100);
    
    for (var i = 0; i < 100; i++) {
        arr[i] = i+1;        
    }
    
    
    function printArray(array,start,len){

        if(start >= len)
            return;
        
        document.write(array[start] + "<br>");
                         
        printArray(array, start+1, len);
        
    }

    printArray(arr,0,arr.length);

})();
