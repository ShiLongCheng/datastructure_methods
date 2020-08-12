var arr = [1, 2, 3, 2, 4, 4, 5];
var set = new Set(arr);

// 数组去重
// 1. 
var newArr = Array.from(set);
// console.log(newArr);
// 2. 利用扩展运算符...
var unique = [...set];
console.log("我是去重后的数组", unique);

// set实例的属性和方法
// 1. 属性 Set.prototype.constructor 指向Set函数
// Set.prototype.size返回实例的成员总数

// 2.方法
// 2.1 操作方法
console.log(set.add(6));
console.log(set.delete(2));
console.log(set.has(3));
console.log(set.clear());

// 2.2 遍历方法 set.keys()  set.values()  set.entries()  set.forEach()
console.log(...[1, 2, 3]);
