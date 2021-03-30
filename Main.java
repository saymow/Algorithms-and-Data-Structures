import java.util.*;

class Main {
  static Scanner console = new Scanner(System.in);

  public static void main(String[] args) {
    SinglyLinkedList singlyLinkedList = new SinglyLinkedList();
    int option;

    System.out.println("------------Singly Linked List------------");
    System.out.println("Options:");
    do {

      System.out.println("1 - Push a number");
      System.out.println("2 - Pop a number");
      System.out.println("3 - Check if includes a number");
      System.out.println("4 - show all numbers");
      System.out.println("5 - exit\n");
      System.out.print("Chose your option: ");
      option = Integer.parseInt(console.nextLine());
      
      System.out.print("\n\n");
      
      switch (option) {
        case 1: {
          System.out.print("Type a number: ");
          singlyLinkedList.push(Integer.parseInt(console.nextLine()));
          break;
        }
        case 2: {
          System.out.println("Element popped.");
          singlyLinkedList.pop();
          break;
        }
        case 3: {
          System.out.print("Type a number: ");
          System.out.println((singlyLinkedList.includes(Integer.parseInt(console.nextLine())) ? "yep" : "no"));
          break;
        }
        case 4: {
          System.out.println("Current elements.");
          singlyLinkedList.list();
          break;      
        }
      }

      System.out.print("\n\n\n");

    } while (option != 5);
  }
}
