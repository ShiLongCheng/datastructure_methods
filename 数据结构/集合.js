// 1. 手写集合
class mySet {
    constructor () {
        // 用对象表示集合
        this.items = {};
    }

    add (value) {
        if (!this.has(value)) {
            // key 和  value相等
            this.items[value] = value;
            return true;
        }
        return false;
    }

    has (value) {
        return this.items.hasOwnProperty(value);
    }

    del (value) {
        if (this.has(value)) {
            delete this.items[value];
            return true;
        }
        return false;
    }

    clear() {
        this.items = [];
    }

    size() {
        // Object.keys()返回指定对象的所有属性名称的数组
        return Object.keys(this.items).length;
    }

    value() {
        // Object.values()返回指定对象的所有属性值的数组
        return Object.values(this.items);
    }
}

let set = new mySet();
set.add(1);
set.add(2);
set.add(3);

// console.log(set.has(3));
// console.log(set.size());

let initSet = new Set();

initSet.add(1);
initSet.add(3);
initSet.add(4);

console.log(initSet.entries());
initSet.forEach(value => {
    console.log(value);
})
