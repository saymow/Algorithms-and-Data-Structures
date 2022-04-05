// This is an input class. Do not edit.
export class LinkedList {
  value;
  next;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export function removeDuplicatesFromLinkedList(linkedList) {
  const head = linkedList
	
	while (linkedList.next) {
		if (linkedList.value === linkedList.next.value) {
			linkedList.next = linkedList.next.next
		} else {
			linkedList = linkedList.next
		}
	}
	
  return head;
}
