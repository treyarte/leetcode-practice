class Queue{

    constructor(size){
        if(!size) throw new Error("Must give queue a size")
        this.SIZE = size;
        this.head = -1;
        this.tail = -1;
        this.items = [];
    }

    isEmpty(){
        if(this.head === -1){
            return true;
        } else {
            return false;
        }
    }

    isFull(){
        if(this.head === 0 && this.tail === this.SIZE - 1){
            return true;
        }

        if(this.head === this.tail + 1){
            return true;
        }

        return false;
    }


    enQueue(val){
       if(this.isFull()){
           console.log("The queue is full");
       } else {
           if(this.isEmpty()){
               this.head = 0;
           }

           this.tail = (this.tail + 1) % this.SIZE;
           this.items[this.tail] = val;
       }
    }

    deQueue(){
        if(this.isEmpty()){
            console.log("The queue is empty")
        } else{
            const val = this.items[this.head];
            this.items[this.head] = null;
            if(this.head === this.tail){
                 this.head = -1;
                 this.tail = -1;
            } else {
                this.head = (this.head + 1) % this.SIZE;
            }

            return val;
        }
    }

    peek(idx){
        if(idx < 0 || idx >= this.SIZE || this.items[idx] === null){
            console.log("Invaid Index");
        } else {
            return this.items[idx];
        }
    }

    display(){
        let i = this.tail;
        if(this.isEmpty()){
            console.log("The queue is empty");
        } else {
            for(let i = this.head; i !== this.tail; i = (i + 1) % this.SIZE){
                console.log(this.items[i] + " ");
            }

            
        }
    }
}