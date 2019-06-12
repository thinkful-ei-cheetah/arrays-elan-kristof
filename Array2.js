// 1.

const Memory = require('./memory.js')
const memory = new Memory()
class Array {
  constructor() {
    this.length = 0
    this.capacity = 0
    this.ptr = memory.allocate(this.length)
  }

  push(value) {
    if(this.length >= this.capacity) {
      this.resize((this.length + 1) * Array.SIZE_RATIO)
    }
    memory.set(this.ptr + this.length, value)
    this.length++
  }

  resize(size) {
    let oldPtr = this.ptr
    this.ptr = memory.allocate(size)
    if(this.ptr === null) {
      throw new Error('Out of bounds')
    }
    memory.copy(this.ptr, oldPtr, size)
    memory.free(oldPtr)
    this.capacity = size
  }
  
  get(index) {
    if(index < 0 || index >= this.length) {
      throw new Error('Index error')
    }
    return memory.get(this.ptr + index)
  } 

  pop() {
    if(this.length <= 0) {
      throw new Error('Index error')
    }
    let value = this.get(this.ptr + (this.length - 1))
    this.length--
    return value
  }

  insert(index, value) {
    if(index < 0 || index >= this.length) {
      throw new Error('Index error')
    }
    if(this.length >= this.capacity) {
      this.resize(this.length + 1 * Array.SIZE_RATIO)
    }
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
    memory.set(this.ptr + index, value)
    this.length++
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error')
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
    this.length--
  }
}

Array.SIZE_RATIO = 3

// 2. 
function main(){

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  // arr.push(3); // capacity = 3
  // arr.push(5);
  // arr.push(15); // capacity = 9
  // arr.push(19); 
  // arr.push(45); 
  // arr.push(10);

  // arr.pop()
  // arr.pop()
  // arr.pop()

  arr.length = 0
  arr.push(1)

  arr.pop()

  arr.push("tauhida")

  console.log('first', arr)
  console.log(arr.get(0))
}

main()

// length = 1; capacity = 3; memory address = 0;
// length = 6; capacity = 9; memory address 0 - 5;

// 3.

// length = 3; capacity = 9; memory address 0 - 2;

// 4. 