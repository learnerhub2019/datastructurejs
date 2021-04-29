function Node(data) {
  this.data = data;
  this.next = undefined;
}

function linkedList() {
  this.head = undefined;
}

const list = new linkedList();
list.head = new Node(1);
list.head.next = new Node(2);
list.head.next.next = new Node( 2 );

console.log( list );