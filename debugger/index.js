// 新的数据结构，使得查找算法发的复杂度降低到O(1)，称为散列Hashing
// 字典表和散列表（哈希表），散列表中的存储位置称为槽slot
// 实现从数据项到存储槽名称的转换，称为散列函数
// 散列函数设计
// 1. 折叠法  将数据项按照位数分成若干段，再将几段数字相加，最后对散列表大小求余，得到散列值
//           有时候折叠法还会包括一个隔数反转的步骤
// 2. 平方取中法  首先对数据项做平方运算，然后取平方数的中间两位，再对散列表的大小求余
// 3. 非数项      把每个字符看做ASCII码

function hash(astring, tablesize) {

    var sum = 0;
    for (let i = 0; i < astring.length; i++) {
        sum += (astring[i].charCodeAt() * i);
    }
    return sum % tablesize;
}

var result = hash('adb', 11);
console.log(result);
