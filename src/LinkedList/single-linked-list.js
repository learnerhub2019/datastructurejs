function Node(data) {
  this.data = data;
  this.next = undefined;
}

function linkedList() {
  this.head = undefined;
}

linkedList.prototype.traverse = function () {
  if (!this.head) console.log("List Is empty");
  let currentNode = this.head;
  let listArray = [];
  while (currentNode) {
    // console.log(currentNode.data); // single value print
    listArray.push(currentNode.data);
    currentNode = currentNode.next;
  }

  console.log(listArray); // all data print
};

linkedList.prototype.addItem = function (data) {
  if (!this.head) {
    this.head = new Node(data);
    return;
  }

  let lastNode = this.head;

  while (lastNode.next) {
    lastNode = lastNode.next;
  }

  lastNode.next = new Node(data);
};

linkedList.prototype.addFirst = function (data) {
  if (!this.head) {
    this.head = new Node(data);
    return;
  }

  const temp = this.head;
  this.head = new Node(data);
  this.head.next = temp;
};

linkedList.prototype.addAfter = function (searchData, item) {
  const newNode = new Node(item);
  if (!this.head) return "List is empty";
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.data === searchData) break;
    currentNode = currentNode.next;
  }

  newNode.next = currentNode.next;
  currentNode.next = newNode;
};

linkedList.prototype.addBefore = function (searchData, item) {
  const newNode = new Node(item);
  if (!this.head) return "List is empty";
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.next.data === searchData) break;
    currentNode = currentNode.next;
  }

  newNode.next = currentNode.next;
  currentNode.next = newNode;
};

const list = new linkedList();
list.addItem(2);
list.addItem(3);
list.addItem(5);
list.addItem(7);
list.addAfter(3, 4);
list.addBefore(7, 6);
list.addFirst(1);
list.traverse();
