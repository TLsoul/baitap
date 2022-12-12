function add (){
    var som = 0;
    for(var i=0; i < arguments.length; i++){
        sum += Number(arguments[i]);
    }
    return sum;        
}
function f1(a1,a2,a3){
    console.log("arg a1" + typeof a1 + ' , arg a2 ' + typeof a2 )
}
//console.log(add(1,2,3,4,5,6,7));
//console.log(add(7,8));