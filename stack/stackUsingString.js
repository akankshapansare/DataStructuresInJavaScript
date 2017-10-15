var Stack = function () {
    this.storage = "";
};

Stack.prototype.push = function (val) {
    this.storage = this.storage.concat("*", val);
};

Stack.prototype.pop = function (){
    
    //Slice off the last charaters up until *
    var string = this.storage.slice(this.storage.lastIndexOf('*') + 1);
    
    //Updating the stack without last item
    this.storage = this.storage.substring(0, this.storage.lastIndexOf('*'));
    
    //Return string
    return string;
};

var myStack = new Stack();
myStack.push("akanksha");
myStack.push("aniket");
console.log(myStack);
myStack.pop();
console.log(myStack);
