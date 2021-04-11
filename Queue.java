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
}
