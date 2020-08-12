// 递归  recursion
// - 最小规模  - 减小规模  - 调用自身
// 1. 任意进制转换  2~16进制
function baseConversion(n, base) {
    var baseStr = '0123456789ABCDEF';
    // 最小规模(基本结构)
    if (n < base) {
        return baseStr[n];
    } else {
        // 缩小规模    调用自身
        return (baseConversion(parseInt(n / base), base)) + baseConversion((n % base), base);
    }
};

// var result = baseConversion(10, 2);
// console.log(result);


// 2. 汉诺塔
function move(height, x, y, z) {
    if (height >= 1) {
        move(height - 1, x, z, y);
        console.log(`Moving disk ${height}`, `from ${x} to ${z}`);
        move(height - 1, y, x, z);
    }
}

// move(2, 'x', 'y', 'z');


// 3. 探索迷宫


// 4. 找零兑换
// 4.1 贪心策略
function greedyAlgrithom(money) {
    var moneyType = [1, 5, 10, 50, 100];
    var moneyCount = [];

    for (let i = 4; i >=0; i--) {
        if (money >= moneyType[i]) {
            let count = parseInt(money / moneyType[i]);
            moneyCount.push(count);
            money -= (count * moneyType[i]);
            console.log(moneyType[i], ":", count , " rest money:", money);
        } else {
            moneyCount.push(0);
            console.log(moneyType[i], ":", count , " rest money:", money);
        }
    }
}

// 4.2 递归版本

// 4.3 动态规划 DP

