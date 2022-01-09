var str='P_ _ _ O _ _ S _ _ _ _ _ _ I _ _ T _ _ _ _ I _ _ O _ _ N _ _ _ _ 2 _';
const arr= str.split(/[ _]+/);
console.log(arr.join("_"));
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