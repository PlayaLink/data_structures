// Node constructor

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

// Linked list contructor

class LinkedList {
  constructor(){
    this.head = new Node("head");
    this.head.next = head;
  }
  _find(value){
    let currNode = this.head;
    while(currNode.value !== value){
      currNode = this.next;
    }
    return currNode;
  }
  _findLast(){
    let currNode = this.head;
    while(!(currNode.next === null)){
      currentNode = this.next;
    }
    return currNode;
  }

  insert(value, location){
    const newNode = new Node("value");
    let currNode = this._find(location);
    currNode.next = newNode.value;
    newNode.next = currNode.next;
    newNode.previous = currNode;
  }
  remove(value){
    const nodeToDelete = this._find(value)
    while(nodeToDelete.next !== null){
      nodeToDelete.previous.next = nodeToDelete.next;
      nodeToDelete.next.previous = nodeToDelete.previous;
      nodeToDelete.next = null;
      nodeToDelete.previous = null;
    }
    nextNode.previous = prevNode;
    }
  }
  display(){
    let current = this.head;
    while(!(current.next == null)){
      console.log(current.next.value);
      current = current.next;
    }
  }
  dispReverse(){
    let current = this._findLast();
    while(!(current.previous === head)){
      console.log(current.value);
      current = current.previous;
    }
  }
}
