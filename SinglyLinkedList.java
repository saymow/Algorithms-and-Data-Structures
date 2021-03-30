class Node {
  int number;
  Node next;
}

class SinglyLinkedList {
  Node initialNode;
  Node lastNode;
  Node tmpNode;

  public void push(int number) {
    if (this.initialNode == null && this.lastNode == null) {
      this.lastNode = new Node();
      this.initialNode = this.lastNode;

      this.lastNode.number = number;
    } else {
      Node newNode = new Node();
      newNode.number = number;

      this.lastNode.next = newNode;
      this.lastNode = newNode;
    }
  }

  public void pop() {
    this.tmpNode = this.initialNode;
    Node previousNode = this.tmpNode;

    while (this.tmpNode != null) {
      if (this.tmpNode.next == null) {
        if (this.tmpNode == this.initialNode) {
          this.initialNode = null;
          this.lastNode = null;
        } else {
          previousNode.next = null;
          this.lastNode = previousNode;
        }
      }

      previousNode = this.tmpNode;
      this.tmpNode = this.tmpNode.next;
    }
  }

  public void unshift(int number) {
    if (this.initialNode == null && this.lastNode == null) {
      this.lastNode = new Node();
      this.initialNode = this.lastNode;

      this.lastNode.number = number;
    } else {
      Node newNode = new Node();
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

  public void list() {
    this.tmpNode = this.initialNode;

    while (this.tmpNode != null) {
      System.out.printf("%d  ", tmpNode.number);
      this.tmpNode = this.tmpNode.next;
    }
  }

  public boolean includes(int number) {
    this.tmpNode = this.initialNode;

    while (this.tmpNode != null) {
      if (this.tmpNode.number == number) return true;
      this.tmpNode = this.tmpNode.next;
    }

    return false;
  }
}
