class Queue {
    constructor(size) {
        this.SIZE = size;
        this.head = -1;
        this.tail = -1;
        this.items = [];
    }

    isEmpty() {
        if (this.head === -1) {
            return true;
        } else {
            return false;
        }
    }

    isFull() {
        if (this.head === 0 && this.tail === this.SIZE - 1) {
            return true
        } else {
            return false;
        }
    }

    enQueue(val) {
        if (this.isFull()) {
            console.log("The queue is full.");
        } else {
            if (this.isEmpty()) {
                this.head = 0;
            }
            this.tail += 1;
            this.items[this.tail] = val;
        }
    }

    deQueue() {
        if (this.isEmpty()) {
            console.log("The queue is empty.");
        } else {
            const element = this.items[this.head];

            if (this.head >= this.tail) {
                this.head = -1;
                this.tail = -1;
            } else {
                this.head += 1;
            }

            return element;
        }
    }

    display() {
        if (this.isEmpty()) {
            console.log("The queue is empty.");
        } else {
            for (let i = this.head; i <= this.tail; i++) {
                console.log(this.items[i]);
            }
        }
    }

    peak(idx) {
        if (this.isEmpty()) {
            console.log("The queue is empty.");
        } else if (idx > this.tail || idx < this.head) {
            console.log("Invalid index");
        } else {
            return this.items[idx];
        }


    }
}