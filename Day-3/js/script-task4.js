/*
Write a function that will accept a unix timeStamp and covert to its UTC equivalent value
*/

(function(){
  
  function utcformat(d){
    d= new Date(d);
    var tail= 'GMT', D= [d.getUTCFullYear(), d.getUTCMonth()+1, d.getUTCDate()],
    T= [d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds()];
    if(+T[0]> 12){
        T[0]-= 12;
        tail= ' pm '+tail;
    }
    else tail= ' am '+tail;
    var i= 3;
    while(i){
        --i;
        if(D[i]<10) D[i]= '0'+D[i];
        if(T[i]<10) T[i]= '0'+T[i];
    }
    return D.join('/')+' '+T.join(':')+ tail;
}
  
console.log(utcformat(1291656749000));
console.log(utcformat(new Date()));

})();
