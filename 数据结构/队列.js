// --------基础队列--------
var Queue = function() {
	this.items = [];
};

// 访问器属性
Object.defineProperty(Queue.prototype, 'length', {
	get: function() {
		return this.items.length;
	}
});

Object.defineProperty(Queue.prototype, 'front', {
	get: function() {
		return this.items[0];
	}
});

Object.defineProperty(Queue.prototype, 'back', {
	get: function() {
		return this.items[this.length - 1];
	}
});

Object.defineProperty(Queue.prototype, 'empty', {
	get: function() {
		return this.items.length === 0;
	}
});

// 方法
Queue.prototype.enqueue = function(item) {
	// 往队尾插入数据
	this.items.push(item);
};

Queue.prototype.dequeue = function() {
	// 从队头取出数据
	if(!this.empty) {
		return this.items.shift();
	} else {
		return -1;
	}
};

// --------优先队列--------

// --------暴露数据--------
module.exports = Queue;
