export default class Queue {
    constructor(size) {
        this.size = size;
        this.memory = new Array(size);
        this.isFull = false;
    }

    add(value) {
        this.memory.unshift(value)
        if (this.memory.length > this.size) {
            this.memory = this.memory.slice(0, this.size)
            this.isFull = true;
        } else {
            this.isFull = false;
        }
    }

    get() {
        return this.memory;
    }
}
