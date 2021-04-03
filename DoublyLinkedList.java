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

  public void insert(int position, int number) {
    DoublyLinkedListNode tmp = this.initialNode;
    DoublyLinkedListNode newNode = new DoublyLinkedListNode();
    int currentPos = 0;
    newNode.number = number;

    while (tmp != null) {
      currentPos++;
      if (position == 1) {
        newNode.next = this.initialNode;
        this.initialNode.previous = newNode;
        this.initialNode = newNode;
        break;
      } else if (currentPos == position - 1) {
        newNode.next = tmp.next;
        newNode.previous = tmp;
        tmp.next = newNode;
        if (newNode.next != null) {
          newNode.next.previous = newNode;
        }
        break;
      }

      tmp = tmp.next;
    }

    if (position > 0 && position <= currentPos) {
      System.out.printf("%d inserted on position %d successfully.\n", number, position);
    } else {
      System.out.printf("Position %d is out of bounds.\n", position);
    }
  }

  public void list() {
    DoublyLinkedListNode tmp = this.initialNode;

    while (tmp != null) {
      System.out.printf("%d   ", tmp.number);
      tmp = tmp.next;
    }
  }

  public boolean includes(int number) {
    DoublyLinkedListNode tmp = this.initialNode;

    while (tmp != null) {
      if (tmp.number == number) return true;
      tmp = tmp.next;
    }

    return false;
  }
}
