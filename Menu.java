import java.util.*;

public class Menu {

  static Scanner console = new Scanner(System.in);

  public static void SinglyLinkedListMenu() {
    SinglyLinkedList singlyLinkedList = new SinglyLinkedList();
    int option;

    System.out.println("------------Singly Linked List------------");
    System.out.println("Options:");
    do {
      System.out.println("1 - Push a number");
      System.out.println("2 - Pop a number");
      System.out.println("3 - Unshift a number");
      System.out.println("4 - Shift a number");
      System.out.println("5 - Insert at given position");
      System.out.println("6 - Remove by value");
      System.out.println("7 - Check if includes a number");
      System.out.println("8 - Show all numbers");
      System.out.println("9 - Clear list");
      System.out.println("10 - Exit\n");
      System.out.print("Chose your option: ");
      option = Integer.parseInt(console.nextLine());

      System.out.print("\n");

      switch (option) {
        case 1:
          {
            System.out.print("Type a number: ");
            singlyLinkedList.push(Integer.parseInt(console.nextLine()));
            System.out.println("Element pushed.");
            break;
          }
        case 2:
          {
            singlyLinkedList.pop();
            System.out.println("Element popped.");
            break;
          }
        case 3:
          {
            System.out.print("Type a number: ");
            singlyLinkedList.unshift(Integer.parseInt(console.nextLine()));
            System.out.println("Element unshifted.");
            break;
          }
        case 4:
          {
            singlyLinkedList.shift();
            System.out.println("Element shifted.");
            break;
          }
        case 5:
          {
            System.out.print("Type a position: ");
            int pos = Integer.parseInt(console.nextLine());
            System.out.print("Type a number: ");
            int number = Integer.parseInt(console.nextLine());
            singlyLinkedList.insert(pos, number);
            break;
          }
        case 6:
          {
            System.out.print("Type a number: ");
            System.out.println(singlyLinkedList.removeByValue(Integer.parseInt(console.nextLine())) ? "removed" : "couldn't find item.");
            break;
          }
        case 7:
          {
            System.out.print("Type a number: ");
            System.out.println((singlyLinkedList.includes(Integer.parseInt(console.nextLine())) ? "yep" : "no"));
            break;
          }
        case 8:
          {
            System.out.print("Current elements: ");
            singlyLinkedList.list();
            break;
          }
        case 9:
          {
            System.out.println("Elements cleared.");
            singlyLinkedList.clear();
          }
        default:
      }

      System.out.print("\n\n");
    } while (option != 10);
  }

  public static void DoublyLinkedListMenu() {
    DoublyLinkedList doublyLinkedList = new DoublyLinkedList();
    int option;

    System.out.println("------------Doubly Linked List----------------");
    System.out.println("Options:");
    do {
      System.out.println("1 - Push a number");
      System.out.println("2 - Pop a number");
      System.out.println("3 - Unshift a number");
      System.out.println("4 - Shift a number");
      System.out.println("5 - Insert at given position");
      System.out.println("6 - Remove by value");
      System.out.println("7 - Check if includes a number");
      System.out.println("8 - Show all numbers");
      System.out.println("9 - Clear list");
      System.out.println("10 - Exit\n");
      System.out.print("Chose your option: ");
      option = Integer.parseInt(console.nextLine());

      System.out.print("\n");

      switch (option) {
        case 1:
          {
            System.out.print("Type a number: ");
            doublyLinkedList.push(Integer.parseInt(console.nextLine()));
            System.out.println("Element pushed.");
            break;
          }
        case 2:
          {
            doublyLinkedList.pop();
            System.out.println("Element popped.");
            break;
          }
        case 3:
          {
            System.out.print("Type a number: ");
            doublyLinkedList.unshift(Integer.parseInt(console.nextLine()));
            System.out.println("Element unshifted.");
            break;
          }
        case 4:
          {
            doublyLinkedList.shift();
            System.out.println("Element shifted.");
            break;
          }
        case 5:
          {
            System.out.print("Type a position: ");
            int pos = Integer.parseInt(console.nextLine());
            System.out.print("Type a number: ");
            int number = Integer.parseInt(console.nextLine());
            doublyLinkedList.insert(pos, number);
            break;
          }
        case 6:
          {
            System.out.print("Type a number: ");
            System.out.println(doublyLinkedList.removeByValue(Integer.parseInt(console.nextLine())) ? "removed" : "couldn't find item.");
            break;
          }
        case 7:
          {
            System.out.print("Type a number: ");
            System.out.println((doublyLinkedList.includes(Integer.parseInt(console.nextLine())) ? "yep" : "no"));
            break;
          }
        case 8:
          {
            System.out.print("Current elements: ");
            doublyLinkedList.list();
            break;
          }
        case 9:
          {
            System.out.println("Elements cleared.");
            doublyLinkedList.clear();
          }
        default:
      }

      System.out.print("\n\n");
    } while (option != 10);
  }
}
