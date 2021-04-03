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
    if (this.finalNode == this.initialNode) {
      this.initialNode = null;
      this.finalNode = null;
    } else if (this.finalNode.previous != null) {
      this.finalNode = this.finalNode.previous;
      this.finalNode.next = null;
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

  public void shift() {
    if (this.initialNode == this.finalNode) {
      this.initialNode = null;
      this.finalNode = null;
    } else if (this.initialNode.next != null) {
      this.initialNode = this.initialNode.next;
      this.initialNode.previous = null;
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
