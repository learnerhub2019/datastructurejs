const Node = function (data) {
  this.data = data;
  this.prev = undefined;
  this.next = undefined;
};

function DoublyLinkedList() {
  this.start = undefined;
  this.end = undefined;
}

DoublyLinkedList.prototype.insertAtEnd = function (data) {
  const temp = new Node(data);
  temp.prev = this.end;

  if (!this.end) {
    this.start = temp;
  } else {
    this.end.next = temp;
  }

  this.end = temp;
};

DoublyLinkedList.prototype.insertAtStart = function (data) {
  const temp = new Node(data);
  temp.next = this.start;

  if (!this.end) {
    this.start = temp;
  } else {
    this.start.prev = temp;
  }
  this.start = temp;
};

DoublyLinkedList.prototype.insertAfter = function (nodeData, item) {
  if (!this.start) return console.log("List is empty");

  const tempData = new Node(item);

  let current = this.start;

  while (current) {
    if (current.data === nodeData) {
      break;
    }
    current = current.next;
  }

  if (!current) {
    console.log("Not a valide node data ");
  } else {
    tempData.prev = current;
    tempData.next = current.next;
    current.next.prev = tempData;
    current.next = tempData;
  }
};

DoublyLinkedList.prototype.insertBefore = function (nodeData, item) {
  if (!this.start) return console.log("List is empty");

  const tempData = new Node(item);
  let currentNode = this.start;

  while (currentNode) {
    if (currentNode.data === nodeData) break;
    currentNode = currentNode.next;
  }

  if (!currentNode) {
    console.log("Not a valid node data");
  } else {
    tempData.next = currentNode;
    tempData.prev = currentNode.prev;
    currentNode.prev.next = tempData;
    currentNode.prev = tempData;
  }
};

DoublyLinkedList.prototype.forwordTraverse = function () {
  if (!this.start) return console.log("List is empty");

  let currentElement = this.start;
  let listItems = "";
  while (currentElement) {
    //console.log( currentElement.data );
    listItems += ` ${currentElement.data}`;
    currentElement = currentElement.next;
  }

  console.log(`forwoard traverse list is ${listItems}`);
};

DoublyLinkedList.prototype.backwordTraverse = function () {
  if (!this.start) return console.log("List is empty");
  let currentElement = this.end;
  let listItems = "";
  while (currentElement) {
    //	console.log( currentElement.data );
    listItems += ` ${currentElement.data}`;
    currentElement = currentElement.prev;
  }

  console.log(`Backword traverse list ${listItems}`);
};
const dlList = new DoublyLinkedList();

dlList.insertAtEnd(2);
dlList.insertAtEnd(3);
dlList.insertAtEnd(5);
dlList.insertAtEnd(7);
dlList.insertAtStart(1);
dlList.insertAfter(3, 4);
dlList.insertBefore(7, 6);
console.log(dlList);
dlList.forwordTraverse();
dlList.backwordTraverse();
