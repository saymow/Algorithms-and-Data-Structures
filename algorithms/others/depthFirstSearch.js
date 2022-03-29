// Iteratively

// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
  name;
  children;

  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

	// O(v + e) time | O(v) space - where "v" are the vertices and "e" are the edges.
  depthFirstSearch(array) {
		const stack = [this]
    
		while (stack.length) {
			const node = stack.pop() 
			
			array.push(node.name)
			
			for (let idx = node.children.length - 1; idx >= 0; idx--) {
				stack.push(node.children[idx])
			}
		}
		
		return array
  }
}


// Recursively

// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
  name;
  children;

  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

	// O(v + e) time | O(v) space - where "v" are the vertices and "e" are the edges.
  depthFirstSearch(array) {
		array.push(this.name)
    for (let i = 0; i < this.children.length; i++) {
			this.children[i].depthFirstSearch(array)
		}
    return array;
  }
}
