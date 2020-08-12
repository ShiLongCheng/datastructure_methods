// 用处：搜索  遍历  求最短路径
// 创建二叉树
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

let root = new TreeNode(1);
let node2 = new TreeNode(2)
let node3 = new TreeNode(3)
let node4 = new TreeNode(4)
let node5 = new TreeNode(5)
let node6 = new TreeNode(6)
let node7 = new TreeNode(7)
root.left = node2
root.right = node3
node2.left = node4
node2.right = node5
node3.left = node6
node3.right = node7

console.log(root);

// 广度优先遍历
var levelOrder = function(root) {
	if (root == null) {
		return [];
	}
	// step是树的深度
	let step = 0;
	let result = [];
	let queue = [root];
	while(queue.length) {
		step += 1;
		// 每一层的节点数
		let level = queue.length;
		let currLevel = [];
		// 每次遍历一层元素
		for (let i = 0; i < level; i++) {
			// 当前访问的节点出队 即访问到当前节点
			let curr = queue.shift();
			// 出队节点的子女入队
			curr.left ? queue.push(curr.left) : '';
			curr.right ? queue.push(curr.right): '';
			// 记录访问的每层节点
			currLevel.push(curr.val);
		}
		// 返回遍历的总结点
		result.push(currLevel);
	}
	return result;
};

console.log(levelOrder(root));
