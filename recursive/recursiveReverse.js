//Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

var recursiveReverse = function (arr) {
    var reversArr = [];
    var addItems = function (orderArr) {
        if(orderArr.length > 0){
            reversArr.push(orderArr.pop());
            addItems(orderArr);
        }
        return;
    };
    
    addItems(arr);
    return reversArr;
};

recursiveReverse([1,2,3,4,5]);