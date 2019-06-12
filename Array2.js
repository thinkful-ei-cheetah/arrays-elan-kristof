import memory from './memory'

class Array {
  constructor() {
    this.length = 0
    this.capacity = 0
    this.ptr = memory.allocate(this.length)
  }

  push(value) {
    if(this.length >= capacity) {
      this.resize(this.length + 1 * Array.SIZE_RATIO)
    }
    memory.set(this.ptr + this.length, value)
  }

  resize(size) {
    let oldPtr = this.ptr
    this.ptr = memory.allocate(size)
    if(!this.ptr) {
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