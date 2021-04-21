import java.util.*;

class Main {

  static Scanner console = new Scanner(System.in);

  public static void main(String[] args) {
    int option;

    do {
      System.out.println("------------Data Structures------------");
      System.out.println("1 - Singly Linked List");
      System.out.println("2 - Doubly Linked List");
      System.out.println("3 - Stack");
      System.out.println("4 - Queue");
      System.out.println("9 - Exit\n");
      System.out.print("Choose your option: ");
      option = Integer.parseInt(console.nextLine());

      System.out.print("\n");

      switch (option) {
        case 1:
          {
            Menu.SinglyLinkedListMenu();
          }
          break;
        case 2:
          {
            Menu.DoublyLinkedListMenu();
            break;
          }
        case 3:
          {
            Menu.StackMenu();
            break;
          }
        case 4:
          {
            Menu.Queue();
            break;
          }
      }
    } while (option != 9);
  }
}
