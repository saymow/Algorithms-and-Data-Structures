class StackNode {

  int number;
  StackNode next;
}

public class Stack {

  StackNode head;

  public void push(int number) {
    StackNode stackNode = new StackNode();
    stackNode.number = number;

    if (this.head == null) {
      this.head = stackNode;
    } else {
      stackNode.next = this.head;
      this.head = stackNode;
    }
  }

  public void show() {
    StackNode tmpNode = this.head;

    while (tmpNode != null) {
      System.out.printf("%d   ", tmpNode.number);
      tmpNode = tmpNode.next;
    }
  }
}
