class QueueNode {

  int number;
  QueueNode previous;
  QueueNode next;
}

public class Queue {

  QueueNode front;
  QueueNode back;

  public void enqueue(int number) {
    QueueNode queueNode = new QueueNode();
    queueNode.number = number;

    if (this.back == null) {
      this.back = queueNode;
      this.front = queueNode;
    } else {
      this.back.previous = queueNode;
      queueNode.next = this.back;

      this.back = queueNode;
    }
  }

  public void dequeue() {
    if (this.front != null) {
      if (this.front.previous != null) {
        this.front.previous.next = null;
        this.front = this.front.previous;
      } else {
        this.front = null;
        this.back = null;
      }
    }
  }

  public void show() {
    QueueNode tmpNode = this.back;

    System.out.print("BACK    ");
    while (tmpNode != null) {
      System.out.printf("%d    ", tmpNode.number);
      tmpNode = tmpNode.next;
    }
    System.out.print("FRONT");
  }

  public void clear() {
    this.front = null;
    this.back = null;
  }
}
