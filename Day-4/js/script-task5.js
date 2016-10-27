/*

Write a program to loop through the children of a ul element(ul will have 5 li's). 
Loop through each of the li and attach a function on it that will alert the value of that li (html text inside the li). 

*/

(function(){

  var lis = document.getElementById("parent-list").getElementsByTagName('li');

    for (var i=0; i<lis.length; i++) {
        lis[i].addEventListener('click', doStuff, false);
    }

    function doStuff() {
        alert( this.innerHTML );
    }
    
})();
