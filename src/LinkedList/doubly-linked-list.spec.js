const DoublyLinkedList = require("./doubly-linked-list");

const doublyLL = new DoublyLinkedList();

describe("Insertion function test", () => {
  it("List empty insert at end equlas to head value", () => {
    doublyLL.insertAtEnd(2);
    expect(doublyLL.start.data).toEqual(2);
  });

  it("List empty insert at end", () => {
    doublyLL.insertAtEnd(3);
    expect(doublyLL.start.data).toEqual(2);
    expect(doublyLL.start.next.data).toEqual(3);
  });

  it("Insert at start expect Head value equal to new insert value", () => {
    doublyLL.insertAtStart(1);
    expect(doublyLL.start.data).toEqual(1);
  });
});
