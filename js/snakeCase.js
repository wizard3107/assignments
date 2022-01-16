var arr =['ashish','pankaj','ravi','abhishek','kaushik'];
var str=''
var snake= arr.reduce(function(el,ac){
    return el+'_'+ac;
})
console.log(snake);
