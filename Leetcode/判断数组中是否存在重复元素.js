var arr = [1, 2, 3, 4, 2];

var newSet = new Set(arr);

var newArr = [...newSet];

console.log(arr.length == newArr.length);
