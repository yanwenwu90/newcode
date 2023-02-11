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
