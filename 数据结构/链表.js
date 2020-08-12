// 辅助类
let Node = function(element) {
	this.element = element;
	this.next = null; // 指向下一个节点的指针
};

class LinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
	}
	
	append(element) {
		let node = new Node(element);
		if (this.head == null) {
			this.head = node;
		} else {
			let current = this.getElementAt(this.length - 1);
			current.next = node;
		}
		this.length++;
	}
	insert(position, element) {
		if (position < 0 || position > this.length) {
			return false;
		}
		let node = new Node(element);
		if (position == 0) {
			node.next = this.head;
			this.head = node;
		} else {
			let pre = this.getElementAt(position - 1);
			node.next = pre.next;
			pre.next = node;
		}
		this.length++;
		return true;
	}
	removeAt(position) {
		if (position < 0 || position >= this.length) {
			return null;
		}
		let current = this.head;
		if (position == 0) {
			this.head = current.next;
		} else {
			let pre = this.getElementAt(position - 1);
			current = pre.next;
			pre.next = current.next;
		}
		this.length--;
		return current.element;
	}
	remove(element) {}
	indexOf(element) {
		let current = this.head;
		for (let i = 0; i < this.length; i++) {
			if (current.element === element) {
				return i;
			}
			current = current.next;
		}
		return -1;
	}
	getElementAt(position) {
		// 边界判断
		if (position < 0 || position >= this.length) {
			return null;
		}
		let current = this.head;
		for (let i = 0; i < position; i++) {
			current = current.next;
		}
		return current;
	}
	isEmpty() {
		return this.length === 0;
	}
	size() {
		return this.length;
	}
	getHead() {
		return this.head;
	}
	clear() {
		this.head = null;
		this.length = 0;
	}
	toString() {
		let current = this.head;
		let s = '';
		while (current) {
			let next = current.next;
			next = next ? next.element : 'null';
			s += `[element: ${current.element}, next: ${next}]`;
			current = current.next;
		}
		return s;
	} // 辅助方法，按指定格式输出链表中的所有元素，方便测试验证结果
}

var newLinkedList = new LinkedList();
newLinkedList.append(2);
newLinkedList.append(3);
console.log(newLinkedList.length);
console.log(newLinkedList.toString());
