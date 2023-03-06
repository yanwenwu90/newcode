// --------------牛客 FED28 获取字符串的长度-----------------------
//
// function strLength(s, bUnicode255For1) {
//   var length = s.length;
//   if (!bUnicode255For1) {
//     for (var i in s) {
//       if (s.charCodeAt(i) > 255) {
//         length++;
//       }
//     }
//   }
//   return length;
// }

// console.log(strLength("hello world, 牛客", false));

// --------------牛客 JS41 dom 节点查找-----------------------
// function commonParentNode(oNode1, oNode2) {
//     while (true) {
//       oNode1 = oNode1.parentNode;
//       if (oNode1.Contains(oNode2)) {
//         return oNode1;
//       }
//     }
//   }

// --------------JS44 根据包名，在指定空间中创建对象-----------------------
// function namespace(oNamespace, sPackage) {
//     const arr = sPackage.split(".");
//     let obj = oNamespace;
//     for (let i in arr) {
//       if (typeof obj[arr[i]] != "object") {
//         obj[arr[i]] = {};
//       }
//       obj = obj[arr[i]];
//     }
//     return oNamespace;
//   }

// --------------JS46 斐波那契数列--------------
// function fibonacci(n) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1 || n === 2) {
//     return 1;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// --------------JS50 计数--------------
// function count(arr, item) {
//   let res = 0;
//   arr.forEach((e) => {
//     if (e === item) {
//       res++;
//     }
//   });
//   return res;
// }

// function count(arr, item) {
//   return arr.filter((e) => {
//     return e === item;
//   }).length;
// }

// --------------JS54 函数传参--------------
// function argsAsArray(fn, arr) {
//   return fn(...arr);
//   return fn.call(this, ...arr);
//   return fn.apply(this, arr);
// }

// --------------JS55 函数的上下文--------------
// function speak(fn, obj) {
//   // return fn.apply(obj);
//   //return fn.call(obj);
//   return fn.bind(obj)();
// }

// --------------JS58 二次封装函数--------------
// function partial(fn, str1, str2) {
//   return function (str3) {
//     return fn(str1, str2, str3);
//   };
// }

// --------------JS59 使用 arguments--------------
// function useArguments() {
//   let res = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     res += arguments[i];
//   }
//   return res;
// }

// function useArguments() {
//   let arr = [...arguments];
//   // return arr.reduce((prev, cur) => {
//   //   return prev + cur;
//   // }, 0);

//   return arr.reduce((prev, cur) => (prev += cur));
// }

// --------------JS62 柯里化--------------
// function curryIt(fn) {
//   return function (para1) {
//     return function (para2) {
//       return function (para3) {
//         return fn(para1, para2, para3);
//       };
//     };
//   };
// }

// --------------JS65 二进制转换--------------
// function base10(str) {
//   let res = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != "0") {
//       res += Math.pow(2, str.length - 1 - i);
//     }
//   }
//   return res;
// }

// function base10(str) {
//   return parseInt(str, 2);
// }

// --------------JS67 乘法--------------
// function multiply(a, b) {
//   let str1 = a.toString();
//   let str2 = b.toString();

//   let num1 = str1.indexOf(".") === -1 ? 0 : str1.length - 1 - str1.indexOf(".");
//   let num2 = str2.indexOf(".") === -1 ? 0 : str2.length - 1 - str2.indexOf(".");

//   let totalNum = num1 + num2;

//   return (a * b).toFixed(totalNum);
//   return parseFloat((a * b).toFixed(totalNum));
// }

// --------------JS69 批量改变对象的属性--------------
// var C = function (name) {
//   this.name = name;
//   return this;
// };
// var obj1 = new C("Rebecca");

// console.log(obj1.name);

// function alterObjects(constructor, greeting) {
//   constructor.prototype.greeting = greeting;
// }

// alterObjects(C, "What's up");

// console.log(obj1.greeting);

// --------------JS71 判断是否包含数字--------------
// function containsNumber(str) {
//   for (var i in str) {
//     if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
//       return true;
//     }
//   }
//   return false;
// }

// function containsNumber(str) {
//   for (var i in str) {
//     if (!isNaN(Number(str[i]))) {
//       return true;
//     }
//   }
//   return false;
// }

// --------------JS73 判断是否以元音字母结尾--------------
// function endsWithVowel(str) {
//   const array = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   return array.filter((e) => e === str[str.length - 1]).length > 0;
// }

// function endsWithVowel(str) {
//   const array = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   return array.find((e) => e === str[str.length - 1]) != undefined;
// }

// --------------JS56 返回函数--------------
// function functionFunction(str) {
//   return function (str1) {
//     return str + ", " + str1;
//   };
// }

// --------------JS60 使用 apply 调用函数--------------
// function callIt(fn) {
//   let paras = [...arguments];
//   paras = paras.slice(1);
//   return fn.apply(null, paras);
// }

// --------------JS61 二次封装函数--------------
// function partialUsingArguments(fn) {
//   let paras = [...arguments];
//   paras = paras.slice(1);
//   return function () {
//     let p = [...arguments];
//     return fn(...paras, ...p);
//     //  return fn.call(this, ...paras, ...p);
//   };
// }

// --------------JS64 二进制转换--------------
// function valueAtBit(num, bit) {
//   let str = num.toString(2);
//   return str[str.length - bit];
// }

// --------------JS66 二进制转换--------------
// function convertToBinary(num) {
//   let str = num.toString(2);
//   let len = str.length;
//   if (len < 8) {
//     for (let i = 0; i < 8 - len; i++) {
//       str = "0" + str;
//     }
//   }
//   return str;
// }

// --------------JS70 属性遍历--------------
// 1、Object.keys(obj) 只会遍历实例属性key值，不会遍历原型上的属性
// function iterate(obj) {
//   let allKeys = Object.keys(obj);
//   let result = [];

//   for (let key of allKeys) {
//     let res = key + ": " + obj[key];
//     result.push(res);
//   }

//   return result;
// }

// 2、for in可以遍历到obj的原型属性和方法，如果不想遍历原型上的，
// 可以在循环内通过obj.hasOwnProperty()判断其是否是自己的实例属性
// function iterate(obj) {
//   let result = [];

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       result.push(key.concat(": ", obj[key]));
//     }
//   }

//   return result;
// }

// --------------JS72 检查重复字符串--------------
// function containsRepeatingLetter(str) {
//   for (let i = 0; i < str.length - 1; i++) {
//     if (isLetter(str[i]) && str[i] === str[i + 1]) {
//       return true;
//     }
//   }

//   return false;
// }

// function isLetter(code) {
//   return ("a" <= code && code <= "z") || ("A" <= code && code <= "Z");
// }

// --------------JS74 获取指定字符串--------------
// function captureThreeNumbers(str) {
//   const reg = /[0-9]{3}/;
//   if (!reg.test(str)) {
//     return false;
//   }
//   return str.match(reg)[0];
// }

// --------------JS75 判断是否符合指定格式--------------
// function matchesPattern(str) {
//   const reg = /^\d{3}-\d{3}-\d{4}$/;
//   return reg.test(str);
// }

// --------------判断是否为合法身份证--------------
// const _isCard = (number) => {
//     const regIdCard = /(^\d{18}$)|(^\d{17}[x|X]$)|(^\d{15}$)/;

//     return regIdCard.test(number);
//   };

//   // 测试用例
//   console.log(_isCard("21062319980907888X"));
//   console.log(_isCard("21062319980907888x"));
//   console.log(_isCard("210623199809078882"));
//   console.log(_isCard("210623199809078"));
//   console.log(_isCard("21062319980907888"));
//   console.log(_isCard("21062319980907888r"));
//   console.log(_isCard("13092219901114603V"));
//   console.log(_isCard("Y1062319980907888X"));

// 将数组最后的元素插入到数组中间
// var array = [2, 4, 3, 2, 1, 6, 7, 9];
// var ele = array.pop();
// array.splice(array.length / 2, 0, ele);
// console.log(array);
