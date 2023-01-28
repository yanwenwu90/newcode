// js sort 排序
// 1、不传参数，不会按照数值大小排序，按照字符编码顺序排；
var arr = ["tom", "james", "green", "smith", "Hans"];
var res = arr.sort();
console.log(res);

var arr1 = [22, 12, 111, 5, 678];
var res1 = arr1.sort();
console.log(res1);

// 2、传入参数，实现升序、降序
// 升序
var arr2 = [22, 12, 111, 5, 678];
var res2 = arr2.sort((a, b) => a - b);
console.log(res2);

// 降序
var arr3 = [22, 12, 111, 5, 678];
var res3 = arr3.sort((a, b) => b - a);
console.log(res3);

// 3、根据数组中对象的某个属性值排序
var arr4 = [{ id: 3 }, { id: 45 }, { id: 12 }, { id: 5 }, { id: 35 }];
var res4 = arr4.sort((a, b) => a.id - b.id);
console.log(res4);

// 4、根据数组中对象的多个属性值排序，多条件排序
var arr5 = [
  { id: 10, age: 9 },
  { id: 5, age: 4 },
  { id: 6, age: 10 },
  { id: 9, age: 6 },
  { id: 2, age: 8 },
  { id: 10, age: 2 },
];

var res5 = arr5.sort((a, b) => {
  if (a.id === b.id) {
    return a.age - b.age;
  } else {
    return a.id - b.id;
  }
});
console.log(res5);
