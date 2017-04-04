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
  insert(value){

  }
  remove(value){

  }
  display(value){

  }
}
