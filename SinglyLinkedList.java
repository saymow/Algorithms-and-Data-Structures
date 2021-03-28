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

    while (this.tmpNode.next != null) {
      if (this.tmpNode.next.next == null) {
        this.tmpNode.next = null;
        this.lastNode = this.tmpNode;
      } else {
        this.tmpNode = this.tmpNode.next;
      }
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
