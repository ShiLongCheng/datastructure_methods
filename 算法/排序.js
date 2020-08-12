// 1. 冒泡排序
// 从小到大排序
function Bubble(arr) {
	if (arr.length < 2) {
		return arr;
	}
	// 复杂度：O(n^2)
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			count++;
			if (arr[j] < arr[i]) {
				// 交换两元素
				let temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
				swapped = true;
			}
		}
	}
	return arr;
}

// 改进版
function Bubble2(arr) {
	if (arr.length < 2) {
		return arr;
	}
	// 复杂度：O(n^2)
	for (let i = 0; i < arr.length; i++) {
		var swapped = false;
		for (let j = 0; j < arr.length - i - 1; j++) {
			count++;
			if (arr[j + 1] < arr[j]) {
				// 交换两元素
				let temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
				swapped = true;
			}
		}
		if (!swapped) {
			return arr;
		}
	}
	return arr;
}

// 2. 简单选择排序  每次从待排序的元素中选出最值（最大或最小），将最值放到最前面
function selectSort(arr) {
	// 复杂度 O(n^2)
	for (let i = 0; i < arr.length; i++) {
		// let minOrMax = arr[i];
		let index = i; // 重要，存放最值位置
		// 寻找待排序的元素中的最值
		for (let j = i + 1; j < arr.length; j++) {
			count++;
			if (arr[j] < arr[index]) {
				// minOrMax = arr[j];
				index = j; // 记录最值位置
			}
		}
		// 将最值和第i位元素交换
		let temp = arr[index];
		arr[index] = arr[i];
		arr[i] = temp;
	}
	return arr;
};

// 3. 直接插入排序  复杂度O(n^2)
function insertSort(arr) {
	// 抽出第i张牌
	for (let i = 1; i < arr.length; i++) {
		// 从后往前插
		for (let j = i; j > 0; j--) {
			count++;
			if (arr[j] < arr[j - 1]) {
				let temp = arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = temp;
			} else {
				break;
			}
		}
	}
	return arr;
}

// 4. 希尔排序 1959年  改进直接插入排序 时间复杂度O(n^(3/2)) 由于跳跃排序，不稳定，不太重要
// Knuth序列  h = 1; h = 3 * h + 1
function shellSort(arr) {
	// h是希尔排序的间隔距离 最后必须h为1 最大的h <= length / 3
	// for (let h = parseInt(arr.length / 2); h >=1; h = parseInt(h / 2))
	var h = 1;
	while (h <= parseInt(shellArr.length / 3)) {
		h = 3 * h + 1;
	}

	for (h; h >= 1; h = parseInt((h - 1) / 3)) {
		for (let i = h; i < arr.length; i++) {
			for (let j = i; j > h - 1; j -= h) {
				count++;
				if (arr[j] < arr[j - h]) {
					let temp = arr[j];
					arr[j] = arr[j - h];
					arr[j - h] = temp;
				} else {
					break;
				}
			}
		}
	}
	return arr;
}

// 5. 快速排序


// 6. 归并排序  将排好的子数组进行合并排序
// var count = 0;
// let newArr = [4, 2, 3, 2, 1, 6, 12, 10, 8, 7];

// let arr = Bubble2(newArr);
// console.log(arr);
// console.log(count);

// let shellArr = [9, 6, 11, 3, 5, 12, 8, 7, 10, 15, 14, 4, 1, 13, 2];


let mergeArr = [1, 4, 7, 8, 3, 6, 9];
// 3个指针 一个指向子数组1的元素，一个指向子数组2的元素，一个指向和原数组等长的数组
function merge(arr, leftPtr, rightPtr, rightBound) {
	// merge
	var mid = rightPtr - 1;
	var temp = [];
	var i = leftPtr;
	var j = rightPtr;
	var k_temp = 0;

	while (i <= mid && j <= rightBound) {
		temp[k_temp++] = arr[i] <= arr[j] ? arr[i++] : arr[j++];
	}
	// 如果子数组中有些没有比较，则添加到temp数组后面
	while (i <= mid) {
		temp[k_temp++] = arr[i++];
	}
	while (j <= rightBound) {
		temp[k_temp++] = arr[j++];
	}
	for (let m = 0; m < temp.length; m++) {
		arr[m + leftPtr] = temp[m];
	}
}

function mergeSort(arr, left, right) {
	if (left == right) return;
	var mid = left + Math.floor((right - left)/2);
	// 左边排序
	mergeSort(arr, left, mid);
	// 右边排序
	mergeSort(arr, mid + 1, right);
	merge(arr, left, mid + 1, right);
	// console.log(arr);
}

mergeSort(mergeArr, 0, mergeArr.length - 1);
console.log(mergeArr);

var randArr = [3, 1, 4, 2, 7];
console.log(randArr.sort());
