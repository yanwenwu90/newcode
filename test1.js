// 深拷贝对象
var obj = {
  name: "刘德华",
  age: 12,
};

var newObj = Object.assign({}, obj);
console.log(newObj);
newObj.name = "陈冠希";
console.log(newObj);
