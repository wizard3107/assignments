
var sum=0;
var array=[1,2,4,3,6,9]
var arr= array.filter(function(n){
    return (n%3===0);
    });
    var sum=0;

arr.forEach(function(n){
   
        sum += (n**3);
});
console.log(sum);