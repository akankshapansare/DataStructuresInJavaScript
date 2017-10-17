'use strict';

function Stack () {
    this.storage = {};
    this.count = 0;
}

Stack.prototype.push = function (val) {
    this.storage[this.count++] = val;
    return this.count;
}

Stack.prototype.pop = function () {
    if(this.count > 0){
        var lastElement = this.storage[--this.count];
        delete this.storage[this.count];
        if(this.count < 0){
        this.count = 0;
    }
    return lastElement;
    }
    return 'Stack is empty';
}

function Queue () {
  this.s1 = new Stack();
  this.s2 = new Stack();
}

Queue.prototype.enqueue = function (val) {
  this.s1.push(val);
};

Queue.prototype.dequeue = function () {
    
    while (this.s1.count > 0) {
    this.s2.push(this.s1.pop());
  }
    var deq = this.s2.pop();
    console.log('Dequeing ' + deq + ' from queue.');
    return deq;
};


var q1 = new Queue();
q1.enqueue(3);
q1.enqueue(4);
q1.enqueue(5);
q1.enqueue(6);
q1.enqueue(7);
q1.dequeue();
q1.dequeue();
q1.dequeue();