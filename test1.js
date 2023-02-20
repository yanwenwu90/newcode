// 将数组最后的元素插入到数组中间
var array = [2, 4, 3, 2, 1, 6, 7, 9];
var ele = array.pop();
array.splice(array.length / 2, 0, ele);
console.log(array);
