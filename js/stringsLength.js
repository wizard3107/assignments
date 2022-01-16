var array = ['ashish','pankaj','rav','priya','vikas','satya'];
var sum=0;

array.forEach(function lengthCheck(str){
    if(str.length%2===1)
    {
        sum += str.length;
        return sum;
    }});
console.log(sum);