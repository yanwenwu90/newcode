// -------------js v8 处理单行或固定行输入---------------------------

// function test() {
//   //有几行就用readline取几次
//   function test() {
//     let stringArr1 = readline().split(" ");
//     let stringArr2 = readline().split(" ");
//     print(stringArr1[0], stringArr1[1]); //print console均可以
//     print(stringArr2[0], stringArr2[1]);
//   }
//   test();
// }

// -------------js v8 处理多行输入---------------------------
// function test() {
//   //处理多行输入，如果只需要处理单行或固定行，就不需要while，有几行就用readline取几次
//   while ((line = readline())) {
//     let stringArr = line.split(" ");
//     let a = parseInt(stringArr[0]); //stringArr元素毕竟是字符串，需要处理成数值进行加法运算
//     let b = parseInt(stringArr[1]);
//     print(a + b);
//   }
// }
// test();

// -------------JavaScript Node 处理单行输入---------------------------
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.on("line", function (line) {
//   var tokens = line.split(" ");
//   console.log(parseInt(tokens[0]), parseInt(tokens[1]));
// });

// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void async function () {
//     // Write your code here
//     while(line = await readline()){
//         let tokens = line.split(' ');
//         let a = parseInt(tokens[0]);
//         let b = parseInt(tokens[1]);
//         console.log(a + b);
//     }
// }()

// -------------JavaScript Node 处理固定行输入---------------------------
// function test() {
//   const readline = require("readline");
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   let hang = -1;
//   let store = [];
//   rl.on("line", function (line) {
//     if (hang == -1) {
//       hang = parseInt(line[0]);
//     } else {
//       store.push(line.split(" "));
//       if (hang == store.length) {
//         //将所有行读到store数组里再进行逻辑操作
//         console.log(parseInt(store[0][0]) + parseInt(store[0][1]));
//         console.log(parseInt(store[1][0]) + parseInt(store[1][1]));
//       }
//     }
//   });
// }
// test();

// -------------JavaScript Node 处理多行输入---------------------------
// function test() {
//   const readline = require("readline");
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   let index = 0;
//   var store = [];
//   rl.on("line", function (line) {
//     if (line.split(" ").length != 0) {
//       store.push(line.split(" "));
//       console.log(parseInt(store[index][0]) + parseInt(store[index][1]));
//       index++;
//     }
//   });
// }
// test();

//------------------end--------------------------------
// 本题为考试多行输入输出规范示例，无需提交，不计分。
// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void async function () {
//     // Write your code here
//     var n = parseInt(await readline());
//     var ans = 0;
//     for(var i = 0;i < n; i++){
//         lines = (await readline()).split(" ");
//         for(var j = 0;j < lines.length; j++){
//             ans += parseInt(lines[j]);
//         }
//     }
//     console.log(ans);
// }()

// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void async function () {
//     // Write your code here
//     while(line = await readline()){
//         let tokens = line.split(' ');
//         let a = parseInt(tokens[0]);
//         let b = parseInt(tokens[1]);
//         console.log(a);
//         console.log(b);
//     }
// }()

// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void (async function () {
//   // Write your code here
//   var n = parseInt(await readline());
//   var ans = "";
//   var result = "";
//   for (var i = 0; i < n; i++) {
//     lines = await readline();
//     for (var j = 0; j < lines.length; j++) {
//       ans = lines;
//     }
//   }

//   // h3a2p0p1y
//   var numArray = [];
//   var notNumArray = [];

//   for (var i in ans) {
//     if (ans[i] >= "0" && ans[i] <= "9") {
//       numArray.push(ans[i]);
//     } else {
//       notNumArray.push(ans[i]);
//     }
//   }

//   result = notNumArray.join("") + numArray.join("");

//   console.log(result);
// })();

// function getRes(ans) {
//   var numArray = [];
//   var notNumArray = [];
//   var result = "";
//   for (var i in ans) {
//     if (ans[i] >= "0" && ans[i] <= "9") {
//       numArray.push(ans[i]);
//     } else {
//       notNumArray.push(ans[i]);
//     }
//   }

//   result = notNumArray.join("") + numArray.join("");

//   return result;
// }

// console.log(getRes("h3a2p0p1y"));

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    let ans = line;

    // h3a2p0p1y
    var numArray = [];
    var notNumArray = [];
    var result = "";

    for (var i in ans) {
      if (ans[i] >= "0" && ans[i] <= "9") {
        numArray.push(ans[i]);
      } else {
        notNumArray.push(ans[i]);
      }
    }

    result = notNumArray.join("") + numArray.join("");

    console.log(result);
  }
})();
