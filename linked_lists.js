// Node constructor

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

// Linked list contructor

class LinkedList {
  constructor(){
    this.head = new Node("head");
  }
  _find(value){
    let currentNode = this.head;
    while(currentNode.value !== value){
      currentNode = this.next;
    }
    return currentNode;
  }
  insert(value, location){
    const newNode = new Node("value");
    let current = this._find(location);
    current.next = newNode.value;
    newNode.next = current.next;
  }
  remove(value){

  }
  display(){
    let current = this.head;
    while(!(current.next == null)){
      console.log(current.next.value);
      current = current.next;
    }
  }
}
