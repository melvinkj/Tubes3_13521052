// Structure Stack

export class Array {
    constructor() {
        this.buffer = [];
    }

    push(x) {
        this.buffer.push(x);
    }

    pop() {
        return this.buffer.pop();
    }

    length() {
        return this.buffer.length;
    }

    indexOf(x) {
        return this.buffer.indexOf(x);
    }

    remove(i) {
        this.buffer.splice(i, 1);
    }

    setElement(i, x) {
        this.buffer[i] = x;
    }

    getElement(i) {
        return this.buffer[i];
    }

    toString(i) {
        return this.buffer.toString();
    }
}
