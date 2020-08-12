var arr = [1, 2, 3, 2, 4, 4, 5];
var set = new Set(arr);

// 数组去重
// 1. 
var newArr = Array.from(set);
console.log(newArr);
// 2. 利用扩展运算符...
var unique = [...set];
console.log(unique);

// 3. 
// 3.1 indexOf()相当于一次循环
function unique(arr) {
	var result = [];
	for (var i = 0; i < arr; i++) {
		if(result.indexOf(arr[i]) < 0) result.push(arr[i]);
	}
	return result;
};
// 3.2 通过hash表，把已经出现过的元素通过下标的形式存入一个object内。下标的引用比indexOf搜索数组快的多。
function hashUnique(arr) {
	var result = [];
	var hash = {};
	for (let i = 0; i < arr.length; i++) {
		let key = (typeof arr[i]) + arr[i];
		// console.log(key);
		if(!hash[key]) {
			result.push(arr[i]);
			hash[key] = true;
		}
	}
	return result;
};

var newArr = hashUnique(arr);
console.log(newArr);

