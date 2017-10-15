//Constructor
function Stack(capacity){
    this.capacity = capacity;
    this.storage = {};
    this.count = 0;
}

//Push operation
Stack.prototype.push = function(value){
    if(this.count < this.capacity){
        this.storage[this.count++] = value;
        return this.count;
    }
    return 'Max capacity is already reached. Remove element before addding one.';
};

//Pop operation
Stack.prototype.pop = function(){
    if(this.count == 0){
        return 'Stack is empty. Add element before poping.';
    }
    
    var value = this.storage[--this.count];
    delete this.storage[this.count];
    if(this.count < 0){
        this.count = 0;
    }
    return value;
};

//Peek operation
Stack.prototype.peek = function(){
    return this.storage[this.count - 1];
};

//Size operation
Stack.prototype.size = function(){
    return this.count;
};


//Test the code

var myStack = new Stack(3);
myStack.push('a');
myStack.push('b');
myStack.peek();
myStack.push('c');
myStack.push('d');
console.log(myStack);
myStack.pop();
myStack.pop();
console.log(myStack);
myStack.size();