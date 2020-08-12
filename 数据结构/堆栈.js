var Stack = function() {
	this.items = [];
};

// 访问器属性
Object.defineProperties(Stack.prototype, {
	length: {
		get: function() {
			return this.items.length;
		};
	},
	empty: {
		get: function() {
			return this.items.length === 0;
		}
	},
	top: {
		get: function() {
			return this.items[this.items.length - 1];
		}
	}
});

Stack.prototype.push = function(item) {
	this.items.push(item);
};

Stack.prototype.pop = function() {
	return this.items.pop();
};
