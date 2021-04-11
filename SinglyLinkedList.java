class SinglyLinkedListNode {

  int number;
  SinglyLinkedListNode next;
}

class SinglyLinkedList {

  SinglyLinkedListNode initialNode;
  SinglyLinkedListNode finalNode;
  SinglyLinkedListNode tmpNode;

  public void push(int number) {
    if (this.initialNode == null && this.finalNode == null) {
      this.finalNode = new SinglyLinkedListNode();
      this.initialNode = this.finalNode;

      this.finalNode.number = number;
    } else {
      SinglyLinkedListNode newNode = new SinglyLinkedListNode();
      newNode.number = number;

      this.finalNode.next = newNode;
      this.finalNode = newNode;
    }
  }

  public void pop() {
    this.tmpNode = this.initialNode;
    SinglyLinkedListNode previousNode = this.tmpNode;

    while (this.tmpNode != null) {
      if (this.tmpNode.next == null) {
        if (this.tmpNode == this.initialNode) {
          this.initialNode = null;
          this.finalNode = null;
        } else {
          previousNode.next = null;
          this.finalNode = previousNode;
        }
      }

      previousNode = this.tmpNode;
      this.tmpNode = this.tmpNode.next;
    }
  }

  public void unshift(int number) {
    if (this.initialNode == null && this.finalNode == null) {
      this.finalNode = new SinglyLinkedListNode();
      this.initialNode = this.finalNode;

      this.finalNode.number = number;
    } else {
      SinglyLinkedListNode newNode = new SinglyLinkedListNode();
      newNode.number = number;

      newNode.next = this.initialNode;
      this.initialNode = newNode;
    }
  }

  public void shift() {
    if (this.initialNode != null) {
      this.initialNode = this.initialNode.next;
    }
  }

  public void insert(int position, int number) {
    this.tmpNode = this.initialNode;
    int currentPos = 0;

    while (this.tmpNode != null) {
      currentPos++;
      if (currentPos == position - 1) {
        SinglyLinkedListNode newNode = new SinglyLinkedListNode();
        newNode.number = number;
        newNode.next = this.tmpNode.next;

        this.tmpNode.next = newNode;

        break;
      } else if (position == 1) {
        SinglyLinkedListNode newNode = new SinglyLinkedListNode();
        newNode.number = number;
        newNode.next = this.tmpNode;

        this.initialNode = newNode;

        break;
      }

      this.tmpNode = this.tmpNode.next;
    }

    if (position > 0 && position <= currentPos) {
      System.out.printf("%d inserted on position %d successfully.\n", number, position);
    } else {
      System.out.printf("Position %d is out of bounds.\n", position);
    }
  }

  public void list() {
    this.tmpNode = this.initialNode;

    while (this.tmpNode != null) {
      System.out.printf("%d  ", tmpNode.number);
      this.tmpNode = this.tmpNode.next;
    }
  }

  public void clear() {
    this.initialNode = null;
  }

  public boolean includes(int number) {
    this.tmpNode = this.initialNode;

    while (this.tmpNode != null) {
      if (this.tmpNode.number == number) return true;
      this.tmpNode = this.tmpNode.next;
    }

    return false;
  }

  public boolean removeByValue(int number) {
    SinglyLinkedListNode tmpNode = this.initialNode;
    SinglyLinkedListNode previousTmpNode = this.initialNode;

    while (tmpNode != null) {
      if (tmpNode.number == number) {
        if (tmpNode == this.initialNode) {
          this.initialNode = tmpNode.next;
        } else if (tmpNode == this.finalNode) {
          previousTmpNode.next = null;
          this.finalNode = previousTmpNode;
        } else {
          previousTmpNode.next = tmpNode.next;
        }

        return true;
      }

      previousTmpNode = tmpNode;
      tmpNode = tmpNode.next;
    }

    return false;
  }
}
