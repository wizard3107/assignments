var arr=['ashish', 'pankaj', 'priya','ankit'];
var aa=arr.filter(function(str){
    if(str[0]==='a'|| str[str.length-1]==='a')
    return true;
    else
    return false;
})
console.log(aa);