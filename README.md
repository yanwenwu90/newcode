# 面试题总结

## 1. 浅拷贝和深拷贝

- 浅拷贝

  将原对象或原数组的引用直接赋给新对象，新数组，新对象／数组只是原对象的一个引用

- 深拷贝
  创建一个新的对象和数组，将原对象的各项属性的“值”（数组的所有元素）拷贝过来，是“值”而不是“引用”
  **目的：改变新的数组（对象）的时候，不改变原数组（对象）**

  ```
    // 深拷贝数组(第一级)
    var array = [1, 2, 3, 4];
    function copy(sourceArray) {
        let newArray = [];
        for (let e of sourceArray) {
        newArray.push(e);
    }
    return newArray;
    }

    var newArr = copy(array);
    console.log(newArr);
    newArr[0] = 99;
    console.log(newArr);

    // 输出
    [1, 2, 3, 4 ]
    [99, 2, 3, 4 ]
  ```

  slice(), concat() 方法也能实现类似功能

  ```
  var array = [1, 2, 3, 4];
  var newArr = array.slice();

  console.log(newArr);
  newArr[0] = 99;
  console.log(newArr);
  ```

  ```
  var array = [1, 2, 3, 4];
  var newArr = array.concat();

  console.log(newArr);
  newArr[0] = 99;
  console.log(newArr);
  ```

  **对于一级数组元素是基本类型变量（如 number,String,boolean）的简单数组, 上面这三种拷贝方式都能成功，但对第一级数组元素是对象或者数组等引用类型变量的数组，上面的三种方式都将失效！**

  1. 直接遍历

     https://blog.csdn.net/qq_39207948/article/details/81067482

  2. **Object.assign**

  ```
  // 深拷贝对象
  var obj = {
  name: "刘德华",
  age: 12,
  };

  var newObj = Object.assign({}, obj);
  console.log(newObj);
  newObj.name = "陈冠希";
  console.log(newObj);

  // 输出
  { name: '刘德华', age: 12 }
  { name: '陈冠希', age: 12 }
  ```

  Object.assign：用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target），并返回合并后的 target

  用法： Object.assign(target, source1, source2); 所以 copyObj = Object.assign({}, obj); 这段代码将会把 obj 中的一级属性都拷贝到{}中，然后将其返回赋给 copyObj

  3. ES6 拓展运算符

  **扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。**

  **注意**：实际上，无论是使用扩展运算符(...)还是解构赋值，对于引用类型都是浅拷贝。所以在使用 splice()、concat()、...对数组拷贝时，只有当数组内部属性值不是引用类型是，才能实现深拷贝。对多层嵌套对象，也即是存在，很遗憾，上面三种方法，都会失败.

###拷贝所有层级

1. 不仅拷贝第一层级，还能够拷贝数组或对象所有层级的各项值。
2. 不是单独针对数组或对象，而是能够通用于数组，对象和其他复杂的 JSON 形式的对象。

**JSON.parse(JSON.stringify(XXXX))**

```
var array = [{ name: { fname: "jim", lname: "green" } }, { name: "james" }];

var newObj = JSON.parse(JSON.stringify(array));
// var newObj = [...array];

console.log(newObj);
newObj[0].name.fname = "陈冠希";
console.log(newObj);
console.log(array);

// 输出
[ { name: { fname: 'jim', lname: 'green' } }, { name: 'james' } ]
[ { name: { fname: '陈冠希', lname: 'green' } }, { name: 'james' } ]
[ { name: { fname: 'jim', lname: 'green' } }, { name: 'james' } ]
```

JSON.parse() 方法用于将一个 JSON 字符串转换为对象--（反序列化）

JSON.stringify() 方法是将一个 JavaScript 值(对象或者数组)转换为一个 JSON 字符串--(序列化）

序列化的缺点：

不支持基本数据类型的 undefined，序列化后将其省略
不支持函数
Nan,Infinity 序列化的结果是 null

###for...in 和 for...of，forEach 的区别

1. for... in 特点

- 遍历对象返回的对象的 key 值,遍历数组返回的数组的下标(key)。
- for ... in 会遍历原型上的属性值
- 遍历返回数据是乱序

**总结一句: for in 循环特别适合遍历对象。**

2. for... of 特点

- for of 遍历的只是数组内的元素，而不包括数组的原型属性 method 和索引 name
- for ... in 会遍历原型上的属性值
- 遍历返回数据是乱序
- for of 不同与 forEach, 它可以与 break、continue 和 return 配合使用,也就是说 for of 循环可以随时退出循环。

**总结一句: for of 比较适合遍历数组，及其他具有遍历器的集合。**

3. forEach 特点

- 使用 foreach 遍历数组的话，使用 break 不能中断循环，使用 return 也不能返回到外层函数。forEach 与 break 和 return 不搭。
- forEach()无法在所有元素都传递给调用的函数之前终止遍历

for…in 循环可应用于对象的复制，不过其有一个缺点，就是会从原型属性里继承 prototype()属性。
