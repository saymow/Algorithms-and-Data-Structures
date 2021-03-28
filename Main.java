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
  }
}
