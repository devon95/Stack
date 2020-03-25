class Stack {
    constructor () {
        this.contents = [];
        this.size = 0;
    }
    push(value) {
        this.contents.push(value);
        this.size++;
    }
    pop() {
        this.size--;
        return this.contents.pop();
    }
    peek() {
        return this.contents[this.contents.length - 1];
    }
}
let stack = new Stack();