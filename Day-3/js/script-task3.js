/*
1. Write a program that will do the following:
    1.1 Accept two string values as arguments, where first value will be a long word(can be any random characters as well), second string will be a single character or substring that will already exist in the first value.
    1.2. The function should then return an object with properties - 'count' which will count the no of occurrences of substring in the first value, ' lastIndex' which will return the index of last occurrence of the substring in the first value. return 
    -1 if the substring can't be found
*/

(function(){

    function checkOccurences(theString,stringsearch){

        var theString = theString;

        if(!(theString.split(stringsearch).length - 1))
            return -1;

        var obj = {
            count: theString.split(stringsearch).length - 1,
            lastIndex: theString.lastIndexOf(stringsearch)
        }

        return obj;        
    }
    
    var result = checkOccurences("liril","l");

    console.log(result);

})();
