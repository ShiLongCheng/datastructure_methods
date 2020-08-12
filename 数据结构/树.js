/* 
树：
1. 建树
2. 搜索树
2.1 深度搜索（BFS）原理：队列  
    遍历方式：
        前序：根左右  中序：左根右  后序：左右根
2.2 广度搜索（DFS）原理：堆栈  
    遍历方式：
        层序遍历：root->第一层->第二层
*/

class TNode {
    constructor(val) {
        this.val = val;
        this.lchild = null;
		this.rchild = null;
		this.flag = true;
    }
}

// ------搜索方法------
// 1. DFS搜索
// 1.1 递归方式
function dfs(node) {
    if (node == null) {
        return;
	}
    // 中序遍历
    dfs(node.lchild);
    console.log(node.val);
    dfs(node.rchild);
}
// 1.2 堆栈方式
function dfs_stack(root) {
	// 中序遍历
	var stackTree = [root];
	while(stackTree.length) {
		// 获取栈顶元素，当前遍历的节点
		var tmp = stackTree[stackTree.length - 1];
		// 如果不曾回溯过，并且左子树存在  while((tmp.flag) && (tmp.lchild != null))
		while((tmp.flag) && (tmp.lchild != null)) {
            console.log(tmp.val);
			// 回溯标记置为false
			tmp.flag = false;
			// 栈顶push左孩子
            stackTree.push(tmp.lchild);
			// 往左遍历
			tmp = tmp.lchild;
		}
		// 弹出栈顶
		tmp = stackTree.pop();
		// 左节点遍历完，输出
		// console.log(tmp.val);
		if (tmp.rchild != null) {
			stackTree.push(tmp.rchild);
		}
	}
}

// 2. BFS搜索
function bfs(root) {
    if (root == null) {
        return [];
    }
    let result = [];
    let queue = [root];
    while (queue.length) {
        // 每一层的节点数
        let level = queue.length;
        let currLevel = [];
        // 每次遍历一层元素
        for (let i = 0; i < level; i++) {
            // 当前访问的节点出队 即访问到当前节点
            let curr = queue.shift();
            console.log(curr.val);
            // 出队节点的子女入队
            curr.lchild ? queue.push(curr.lchild) : '';
            curr.rchild ? queue.push(curr.rchild) : '';
            // 记录访问的每层节点
            currLevel.push(curr.val);
        }
        // 返回遍历的总结点
        result.push(currLevel);
    }
    return result;
}

// ------建树------
var root = new TNode(0);
var node1 = new TNode(1);
var node2 = new TNode(2);
var node3 = new TNode(3);
var node4 = new TNode(4);
var node5 = new TNode(5);

root.lchild = node1;
root.rchild = node2;
node1.lchild = node3;
node1.rchild = node4;
node2.rchild = node5;

// 
dfs_stack(root);
