function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function inOrderTraversal(root) {
  if (!root) return;
  inOrderTraversal(root.left);
  console.log(root.data);
  inOrderTraversal(root.right);
}

function preOrderTraversal(root) {
  if (!root) return;
  console.log(root.data);
  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
}

function postOrderTraversal(root) {
  if (!root) return;
  postOrderTraversal(root.left);
  postOrderTraversal(root.right);
  console.log(root.data);
}

function treeDs() {
  const root = new Node(18);

  root.left = new Node(10);
  root.left.left = new Node(3);
  root.left.right = new Node(11);

  root.right = new Node(20);
  root.right.left = new Node(19);
  root.right.right = new Node(21);

  console.log("======= In order ========");
  inOrderTraversal(root);
  console.log("======= pre order ========");
  preOrderTraversal(root);
  console.log("======= post order ========");
  postOrderTraversal(root);
}

treeDs();

/* 		18
	
	10      20

 3 	  11  19	21 */

// Inorder( LEFT, ROOT, RIGHT ) - 3 10 11 18 19 20 21
// Preorder ( ROOT, LEFT, RIGHT ) - 18 10 3 11 20 19 21
// post order ( LEFT, RIGHT, ROOT ) - 3 11 10 19 21 20 18
