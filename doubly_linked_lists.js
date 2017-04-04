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
  }
  _find(value){
    let currNode = this.head;
    while(currNode.value !== value){
      currNode = this.next;
    }
    return currNode;
  }
  _findPrevious(value){
    let currNode = this.head;
    while(!(currNode.next == null) && (currNode.next !== value)){
      currNode = currNode.next;
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
    const prevNode = this._findPrevious(value);
    while(nodeToDelete.next !== null){
      prevNode.next = nodeToDelete.next;
    }
  }
  display(){
    let current = this.head;
    while(!(current.next == null)){
      console.log(current.next.value);
      current = current.next;
    }
  }
}
