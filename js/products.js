var num = [2,3,4,5,6];
var product = num.reduce(function(ac,el){
    return ac*el;
})
console.log(product);