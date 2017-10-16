//Constructor
function Queue(capacity){
    this.capacity = capacity;
    this.storage = {};
    this.head = 0;
    this.tail = 0;
}

//Enqueue operation
Queue.prototype.enqueue = function(value){
    if(this.count() < this.capacity){
        this.storage[this.tail++] = value;
        return this.count();
    }
    return 'Max capacity already reached. Remove element before adding a new one.';
};

//Dequeue operation
Queue.prototype.dequeue = function(){
    var element = this.storage[this.head];
    delete this.storage[this.head];
    if(this.head < this.tail){
        this.head++;
    }
    return element;
};

//Peek operation
Queue.prototype.peek = function(){
    return this.storage[this.head];
};

//Count operation
Queue.prototype.count = function(){
    return this.tail - this.head;
};

//Contains element operation
Queue.prototype.contains = function(value){
    for(var i = this.head; i < this.tail; i++){
        if(this.storage[i] == value){
            return true;
        }
        return false;
    }
};

//Test the code

var myQueue = new Queue(3);
myQueue.enqueue('a');
myQueue.enqueue('h');
myQueue.enqueue('j');
console.log(myQueue);
myQueue.peek();
myQueue.dequeue();
console.log(myQueue);
myQueue.contains('h');