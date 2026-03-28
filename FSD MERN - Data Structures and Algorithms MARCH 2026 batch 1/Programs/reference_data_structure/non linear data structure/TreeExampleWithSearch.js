// 🌳 Node Class
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// 🌳 Binary Tree Class
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // 🔹 Insert using Level Order
    insert(data) {
        const newNode = new Node(data);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let queue = [this.root];

        while (queue.length) {
            let current = queue.shift();

            if (!current.left) {
                current.left = newNode;
                return;
            } else {
                queue.push(current.left);
            }

            if (!current.right) {
                current.right = newNode;
                return;
            } else {
                queue.push(current.right);
            }
        }
    }

    // 🔥 DFS Traversals

    // Preorder (Root → Left → Right)
    preorder(node = this.root) {
        if (!node) return;
        console.log(node.data);
        this.preorder(node.left);
        this.preorder(node.right);
    }

    // Inorder (Left → Root → Right)
    inorder(node = this.root) {
        if (!node) return;
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    }

    // Postorder (Left → Right → Root)
    postorder(node = this.root) {
        if (!node) return;
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.data);
    }

    // 🔥 DFS Search (Preorder)
    dfsSearch(node, target) {
        if (!node) return null;

        console.log("DFS Visiting:", node.data);

        if (node.data === target) {
            return node;
        }

        let left = this.dfsSearch(node.left, target);
        if (left) return left;

        return this.dfsSearch(node.right, target);
    }

    // 🔥 BFS Traversal (Level Order)
    levelOrder() {
        if (!this.root) return;

        let queue = [this.root];

        while (queue.length) {
            let current = queue.shift();
            console.log(current.data);

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }

    // 🔥 BFS Search
    bfsSearch(target) {
        if (!this.root) return null;

        let queue = [this.root];

        while (queue.length) {
            let current = queue.shift();

            console.log("BFS Visiting:", current.data);

            if (current.data === target) {
                return current;
            }

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        return null;
    }
}


// 🚀 Usage Example

let tree = new BinaryTree();

// Build Tree
tree.insert("A");
tree.insert("B");
tree.insert("C");
tree.insert("D");
tree.insert("E");
tree.insert("F");

// Tree looks like:
//        A
//      /   \
//     B     C
//    / \   /
//   D   E F

// 🔹 DFS Traversals
console.log("Preorder:");
tree.preorder();

console.log("\nInorder:");
tree.inorder();

console.log("\nPostorder:");
tree.postorder();

// 🔹 DFS Search
console.log("\nDFS Search for E:");
let dfsResult = tree.dfsSearch(tree.root, "E");
console.log("Found:", dfsResult ? dfsResult.data : "Not Found");

// 🔹 BFS Traversal
console.log("\nLevel Order (BFS):");
tree.levelOrder();

// 🔹 BFS Search
console.log("\nBFS Search for E:");
let bfsResult = tree.bfsSearch("E");
console.log("Found:", bfsResult ? bfsResult.data : "Not Found");