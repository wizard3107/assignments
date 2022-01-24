var arr =[1,2,3,4,5,6];
var cube = arr.map(function(n){
    return n ** 3;
})
console.log(cube);
function runProgram(input) {
  // Write code here
}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}