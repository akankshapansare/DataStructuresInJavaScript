//Implement Stack

//@constructor
var MinStack = function() {
    this.minStack = [];
    this.container = [];
};

//Push operation
MinStack.prototype.push = function(x) {
    this.container.push(x);
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x);
    }
};

//pop operation
MinStack.prototype.pop = function() {
    var x = this.container.pop();
    if (x === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

//peek operation
MinStack.prototype.top = function() {
    return this.container[this.container.length - 1];
};

//getMin operation
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
}

//Test the code
var ms = new MinStack();
ms.push(7);
ms.push(4);
ms.push(3);
ms.push(5);
ms.getMin();