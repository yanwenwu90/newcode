// 深拷贝对象
var array = [{ name: { fname: "jim", lname: "green" } }, { name: "james" }];

var newObj = JSON.parse(JSON.stringify(array));
// var newObj = [...array];

console.log(newObj);
newObj[0].name.fname = "陈冠希";
console.log(newObj);
console.log(array);
