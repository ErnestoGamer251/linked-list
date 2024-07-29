class Node {
    constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.nextNode = newNode;
        this.tail = newNode;
      }
      this.length++;
    }
  
    prepend(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.nextNode = this.head;
        this.head = newNode;
      }
      this.length++;
    }
  
    size() {
      return this.length;
    }
  
    getHead() {
      return this.head;
    }
  
    getTail() {
      return this.tail;
    }
  
    at(index) {
      if (index < 0 || index >= this.length) {
        return null;
      }
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  
    pop() {
      if (!this.head) {
        return null;
      }
      if (this.length === 1) {
        const poppedNode = this.head;
        this.head = null;
        this.tail = null;
        this.length--;
        return poppedNode;
      }
      let currentNode = this.head;
      while (currentNode.nextNode !== this.tail) {
        currentNode = currentNode.nextNode;
      }
      const poppedNode = this.tail;
      this.tail = currentNode;
      this.tail.nextNode = null;
      this.length--;
      return poppedNode;
    }
  
    contains(value) {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === value) {
          return true;
        }
        currentNode = currentNode.nextNode;
      }
      return false;
    }
  
    find(value) {
      let currentNode = this.head;
      let index = 0;
      while (currentNode) {
        if (currentNode.value === value) {
          return index;
        }
        currentNode = currentNode.nextNode;
        index++;
      }
      return null;
    }
  
    toString() {
      let result = '';
      let currentNode = this.head;
      while (currentNode) {
        result += `( ${currentNode.value} ) -> `;
        currentNode = currentNode.nextNode;
      }
      result += 'null';
      return result;
    }
  
    insertAt(value, index) {
      if (index < 0 || index > this.length) {
        return;
      }
      if (index === 0) {
        this.prepend(value);
        return;
      }
      if (index === this.length) {
        this.append(value);
        return;
      }
      const newNode = new Node(value);
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.nextNode;
      }
      newNode.nextNode = currentNode.nextNode;
      currentNode.nextNode = newNode;
      this.length++;
    }
  
    removeAt(index) {
      if (index < 0 || index >= this.length) {
        return;
      }
      if (index === 0) {
        this.head = this.head.nextNode;
        if (this.length === 1) {
          this.tail = null;
        }
        this.length--;
        return;
      }
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = currentNode.nextNode.nextNode;
      if (index === this.length - 1) {
        this.tail = currentNode;
      }
      this.length--;
    }
  }
  
  // Testing the Linked List
  const list = new LinkedList();
  
  list.append("dog");
  list.append("cat");
  list.append("parrot");
  list.append("hamster");
  list.append("snake");
  list.append("turtle");
  
  console.log(list.toString());
  