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

  public void pop() {
    DoublyLinkedListNode tmp = this.initialNode;
    DoublyLinkedListNode previousNode = tmp;

    while (tmp != null) {
      if (tmp.next == null) {
        if (tmp == this.initialNode) {
          this.initialNode = null;
          this.finalNode = null;
        } else {
          previousNode.next = null;
          this.finalNode = previousNode;
        }
      }

      previousNode = tmp;
      tmp = tmp.next;
    }
  }

  public void unshift(int number) {
    DoublyLinkedListNode newNode = new DoublyLinkedListNode();
    newNode.number = number;

    if (this.initialNode == null) {
      this.initialNode = newNode;
      this.finalNode = newNode;
    } else {
      this.initialNode.previous = newNode;
      newNode.next = this.initialNode;
      this.initialNode = newNode;
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
