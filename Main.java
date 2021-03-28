import java.util.*;

class Main {
  static Scanner console = new Scanner(System.in);

  public static void main(String[] args) {
    SinglyLinkedList singlyLinkedList = new SingleLinkedList();
    boolean finished;

    do {
      System.out.print("Type a number: ");
      singlyLinkedList.push(Integer.parseInt(console.nextLine()));

      System.out.print("Do you wanna add more numbers (Y/N):");
      finished = console.nextLine().toLowerCase().charAt(0) == 'n';
    } while (!finished);

    singlyLinkedList.pop();
    singlyLinkedList.list();

    System.out.println(
      "Does it includes 3? " + (singlyLinkedList.includes(3) ? "yep" : "no")
    );
  }
}
