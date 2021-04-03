class DoublyLinkedListNode {

  int number;
  DoublyLinkedListNode next;
  DoublyLinkedListNode previous;
}

class DoublyLinkedList {

  DoublyLinkedListNode initialNode;
  DoublyLinkedListNode finalNode;

  public void push(int number) {
    DoublyLinkedListNode newNode = new DoublyLinkedListNode();
    newNode.number = number;

    if (this.initialNode == null) {
      this.initialNode = newNode;
      this.finalNode = newNode;
    } else {
      newNode.previous = this.finalNode;
      this.finalNode.next = newNode;
      this.finalNode = newNode;
    }
  }

  public void list() {
    DoublyLinkedListNode tmp = this.initialNode;

    while (tmp != null) {
      System.out.printf("%d   ", tmp.number);
      tmp = tmp.next;
    }
  }
}
