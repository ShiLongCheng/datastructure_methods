// 1. 二分查找  条件：线性表有序；顺序存储
function sequentialSearch(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
            return i;
        }
    }
    return -1;
}

function binarySearch(arr, k) {
    var l = 0, r = arr.length - 1;
    while(l <= r) {
        var mid = l + Math.floor((r - l) / 2);
        if (arr[mid] == k) {
            return mid;
        } else if (arr[mid] > k) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }   
    return -1;
}

// 找一个模糊值
function binarySearchFuzzy(arr, k) {
    var l = 0, r = arr.length - 1;
    // 循环条件发生改变
    // 左右索引值发生改变 l = mid, r = mid - 1或者l = mid + 1, r = mid
    while(l < r) {
        var mid = l + Math.floor((r - l) / 2);
        if (arr[mid] < k) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }   
    return l;
}

var arr = [1, 2, 3, 3, 4, 6, 9];
console.log(sequentialSearch(arr, 3));
