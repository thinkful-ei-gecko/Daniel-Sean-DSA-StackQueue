//Stacks and Queue Drills

//1. Create a stack class

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(list) {
  return list.top;
}

function isEmpty(list) {
  if (list.top === null) {
    return 'Empty stack';
  }
  return 'Not empty';
}

function display(list) {
  console.log(list.top);
}

function main() {
  const starTrek = new Stack();
  const noTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  //console.log(starTrek);
  //console.log('This is a peek');
  //console.log(peek(starTrek));
  console.log(isEmpty(noTrek));
  console.log(isEmpty(starTrek));

  //remove to mccoy
  starTrek.pop();
  starTrek.pop();
  //Display the top of the stack using display

  console.log('This is a display');
  display(starTrek);
}

console.log(main());
